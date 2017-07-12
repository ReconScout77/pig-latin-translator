$(function() {
  $("#pigLatin").submit(function(event) {
    event.preventDefault();
    var userInput = $("#sentence").val();

    $("#output").text(userInput);
  });
});
