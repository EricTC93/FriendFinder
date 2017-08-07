// Dependencies
var friends = require("../data/friends.js");

// Routes
module.exports = function(app) {

	// Displays all friends saved in the server
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});

	// Adds new user to the friend array and returns the closest match to the user
	app.post("/api/friends",function(req,res) {
		var newUser = req.body;

		for (var i = 0; i<newUser.scores.length; i++) {
			newUser.scores[i] = parseInt(newUser.scores[i]);
		}

		friends.push(newUser);

		res.send(findClosestMatch(newUser,friends));
	});
}

// Searches the user for the best match
function findClosestMatch(user,Users) {
  var smallestDiff = 999;
  var closest;
  for(var i = 0; i<Users.length; i++) {
    if (user !== Users[i]) {
      var newDiff = totalDifference(user,Users[i]);
      if (newDiff < smallestDiff) {
        smallestDiff = newDiff;
        closest = Users[i];
      }
    }
  }

  return closest;

}

// Caculates the total absolute differencies comparing the two users' scores
function totalDifference(userA,userB) {
  var totalDiff = 0;
  for(var i = 0; i<userA.scores.length; i++) {
    totalDiff+=absoluteDifference(userA.scores[i],userB.scores[i]);
  }
  return totalDiff;
}

// Calculates absolute difference
function absoluteDifference(x,y) {
  if (x > y){
    return x-y;
  }

  return y-x;
}