$(document).ready(function() {
    $('.carousel').carousel();
    $("#project-one").removeClass("hide");
});

$("#one").click(function() {
  $(".project").addClass("hide");
  $("#project-one").removeClass("hide");
});

$("#two").click(function() {
  $(".project").addClass("hide");
  $("#project-two").removeClass("hide");
});

$("#three").click(function() {
  $(".project").addClass("hide");
  $("#project-three").removeClass("hide");
});

$("#four").click(function() {
  $(".project").addClass("hide");
  $("#project-four").removeClass("hide");
});

$("#five").click(function() {
  $(".project").addClass("hide");
  $("#project-five").removeClass("hide");
});

