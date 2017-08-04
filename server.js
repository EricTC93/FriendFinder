var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friends = require("./app/data/friends.js");

// console.log(friends);

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
	res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.post("/survey", function(req, res) {
	var newUser = {
  	"name":req.body.name,
  	"photo":req.body.photo,
  	"scores":[
      parseInt(req.body.ques1),
      parseInt(req.body.ques2),
      parseInt(req.body.ques3),
      parseInt(req.body.ques4),
      parseInt(req.body.ques5),
      parseInt(req.body.ques6),
      parseInt(req.body.ques7),
      parseInt(req.body.ques8),
      parseInt(req.body.ques9),
      parseInt(req.body.ques10)
    ]
};
	// console.log(newUser);
	friends.push(newUser);
	res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/api/friends", function(req, res) {
	res.json(friends);
});

app.listen(PORT);