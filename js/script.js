
var name = 


$(document).ready(function(){
  $(".design").hover(function(){
    $("#design").toggle();
  });

  $(".development").hover(function(){
    $("#development").fadeToggle();
  });

  $(".product-development").hover(function(){
    $("#product-development").fadeToggle();
  });

  event.preventDefault();
});
