// business logic
var resultPingPong = function(input) {
  var result = [];
  for (var i = 0 ; i <= input; i++) {
    if (i % 15 === 0) {
      result.push("ping-pong");
    } else
    result.push(i);
  }
  return result;
};

// user-interface logic
$(document).ready(function() {
  $("form#pingPong").submit(function(event) {
    event.preventDefault();
    $("ul").empty();
    $("#displayResult").hide();
    var userNumber = parseInt($("input#userNumber").val());
    var displayResult = resultPingPong(userNumber);

    for (var i = 1; i <= userNumber; i++) {
      $("ul").append("<li>" + displayResult[i] + "</li>");
    };

    $("#displayResult").show();
  });
});
