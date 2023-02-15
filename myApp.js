let express = require("express");
require("dotenv").config();
let app = express();
require("dotenv").config();

app.use((req, res, next) => {
	const path = req.path;
	const method = req.method;
	const ip = req.ip;

	console.log(`${method} ${path} - ${ip}`);

	next();
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
	console.log("hola");
	res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", function (req, res) {
	if (process.env.MESSAGE_STYLE === "uppercase") {
		res.json({ message: "Hello json".toUpperCase() });
	} else {
		res.json({ message: "Hello json" });
	}
});

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
module.exports = app;
