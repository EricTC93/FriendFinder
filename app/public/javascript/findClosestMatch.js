$("#submit").on("click",function(event) {
  event.preventDefault();

  var currentURL = window.location.origin;

  var newUser = {
    "name":$("#name").val().trim(),
    "photo":$("#photo").val().trim(),
    "scores":[
      $("#ques1").val(),
      $("#ques2").val(),
      $("#ques3").val(),
      $("#ques4").val(),
      $("#ques5").val(),
      $("#ques6").val(),
      $("#ques7").val(),
      $("#ques8").val(),
      $("#ques9").val(),
      $("#ques10").val()
    ]
  };

  $("#name").val("");
  $("#photo").val("");

  $.post(currentURL + "/api/friends", newUser, function(data) {
    console.log(data);
    $("#newFriendName").text(data.name);
    $("#newFriendPhoto").attr("src",data.photo);
    $("#friendFound").modal("toggle");
  });

});

// function findClosestMatch(user,Users) {
//   var smallestDiff = 999;
//   var closest;
//   for(var i = 0; i<Users.length; i++) {
//     if (user !== Users[i]) {
//       var newDiff = totalDifference(user,Users[i]);
//       if (newDiff < smallestDiff) {
//         smallestDiff = newDiff;
//         closest = Users[i];
//       }
//     }
//   }
//   console.log(closest);
// }

// function totalDifference(userA,userB) {
//   var totalDiff = 0;
//   for(var i = 0; i<userA.scores.length; i++) {
//     totalDiff+=absoluteDifference(userA.scores[i],userB.scores[i]);
//   }
//   return totalDiff;
// }

// function absoluteDifference(x,y) {
//   if (x > y){
//     return x-y;
//   }

//   return y-x;
// }