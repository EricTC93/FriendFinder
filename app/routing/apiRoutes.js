var friends = require("../data/friends.js");

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});

	app.post("/api/friends",function(req,res) {
		var newUser = req.body;

		for (var i = 0; i<newUser.scores.length; i++) {
			newUser.scores[i] = parseInt(newUser.scores[i]);
		}

		friends.push(newUser);

		res.send(findClosestMatch(newUser,friends));
	});
}

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

function totalDifference(userA,userB) {
  var totalDiff = 0;
  for(var i = 0; i<userA.scores.length; i++) {
    totalDiff+=absoluteDifference(userA.scores[i],userB.scores[i]);
  }
  return totalDiff;
}

function absoluteDifference(x,y) {
  if (x > y){
    return x-y;
  }

  return y-x;
}