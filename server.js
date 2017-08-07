// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Starts Express
var app = express();
var PORT = process.env.PORT || 3000;

// Lets express handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("app/public"));

// Routes
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

app.listen(PORT,function() {});