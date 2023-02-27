// imports
require("dotenv").config();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// set up mongoose
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
	console.log("Mongo DB Connected!");
});

// creating Person Document Schema
const personSchema = new Schema({
	name: String,
	age: Number,
	favoriteFoods: [String],
});

let Person = new mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
	// Insert only one document with data following its schema data structure.
	const person = new Person({
		name: "Jhon",
		age: 25,
		favoriteFoods: ["pizza", "hot dogs"],
	});

	person.save((err, data) => {
		done(null, data);
	});
};

const createManyPeople = (arrayOfPeople, done) => {
	// Insert a group of documents using the Model.create() function that pass in the params an array of
	// objects following the structure of it model schema.

	Person.create(arrayOfPeople).then((data) => {
		done(null, data);
	});
};

const findPeopleByName = (personName, done) => {
	// Search a document by its name param
	Person.find({
		name: personName,
	}).then((data) => {
		done(null, data);
	});
};

const findOneByFood = (food, done) => {
	done(null /*, data*/);
};

const findPersonById = (personId, done) => {
	done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
	const foodToAdd = "hamburger";

	done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
	const ageToSet = 20;

	done(null /*, data*/);
};

const removeById = (personId, done) => {
	done(null /*, data*/);
};

const removeManyPeople = (done) => {
	const nameToRemove = "Mary";

	done(null /*, data*/);
};

const queryChain = (done) => {
	const foodToSearch = "burrito";

	done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
