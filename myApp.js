let express = require("express");
let app = express();

app.use("/public", express.static(__dirname + "/public"));

module.exports = app;
