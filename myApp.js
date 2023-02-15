let express = require("express");
let app = express();
require("dotenv").config();

app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", function (req, res) {
	if (process.env.MESSAGE_STYLE === "uppercase") {
		res.json({ message: "Hello json".toUpperCase() });
	} else {
		res.json({ message: "Hello json without uppercase" });
	}
});

module.exports = app;
