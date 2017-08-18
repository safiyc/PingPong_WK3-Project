// user-interface logic
$(document).ready(function() {
  $("form#pingPong").submit(function(event) {
    event.preventDefault();
    $("ul").empty();
    $("#displayResult").hide();
    var userNumber = parseInt($("input#userNumber").val());
    var result = userNumber;

    $("ul").append("<li>" + result + "</li>");
    $("#displayResult").show();
  });
});
