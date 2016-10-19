$(document).ready(function() {
  $("form#blanks").submit(function(event) {
    var inputedname = $("input#inputname").val();
    $(".name").text(inputedname);

    $(".letter").show();
    event.preventDefault();

  });
});
