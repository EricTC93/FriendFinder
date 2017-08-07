$(document).ready(function() {

  $('select').select2({});

  // $(".select2-selection__rendered").css("width","100px");

  $("#submit").on("click",function(event) {
    event.preventDefault();

    var currentURL = window.location.origin;

    var nameVal = $("#name").val().trim();
    var photoVal = $("#photo").val().trim();

    if (nameVal === "" || photoVal === "" || 
      $("#ques1").val() === null || $("#ques2").val() === null ||
      $("#ques3").val() === null || $("#ques4").val() === null ||
      $("#ques5").val() === null || $("#ques6").val() === null ||
      $("#ques7").val() === null || $("#ques8").val() === null ||
      $("#ques9").val() === null || $("#ques10").val() === null) 
    {
        $("#error").html("*All fields are required*");
        $("#error").show();
        return;
    }

    $("#error").hide();

    var newUser = {
      "name":nameVal,
      "photo":photoVal,
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
  
});