// imports
let express = require("express");
require("dotenv").config();
let app = express();
require("dotenv").config();

// log incoming request information Middleware
app.use((req, res, next) => {
	const path = req.path;
	const method = req.method;
	const ip = req.ip;

	console.log(`${method} ${path} - ${ip}`);

	next();
});

// serve static files
app.use("/public", express.static(__dirname + "/public"));

// serve index html file
app.get("/", function (req, res) {
	res.sendFile(__dirname + "/views/index.html");
});

// serve a basic response using envoirement variables to change behaviour of response
app.get("/json", function (req, res) {
	if (process.env.MESSAGE_STYLE === "uppercase") {
		res.json({ message: "Hello json".toUpperCase() });
	} else {
		res.json({ message: "Hello json" });
	}
});

// Get a timestamp when requesting this route
app.get(
	"/now",
	(req, res, next) => {
		req.time = new Date().toString();
		next();
	},
	(req, res) => {
		res.json({ time: req.time });
	}
);

// get the information passed as url params
app.get("/:word/echo", (req, res) => {
	const word = req.params["word"];

	//
	return res.json({ echo: word });
});

// get query information
app.route("/name")
	// get handler
	.get((req, res) => {
		const firstname = req.query["first"];
		const lastname = req.query["last"];

		res.json({ name: firstname + " " + lastname });
	})
	.post((req, res) => {
		res.json({ ok: true });
	});

// export
module.exports = app;
