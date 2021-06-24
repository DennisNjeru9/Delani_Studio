$(document).ready(function(){
  $(".design").click(function(){
    $("#design").toggle();
  });

  $(".development").click(function(){
    $("#development").toggle();
  });

  $(".product-development").click(function(){
    $("#product-development").toggle();
  });

  $("#image1").hover(function(){
    $("#text_one").fadeIn("slow");
    }, function(){
    $("#text_one").fadeOut("slow");
  });

  $("#image2").hover(function(){
    $("#text_two").fadeIn("slow");
    }, function(){
    $("#text_two").fadeOut("slow");
  });

  $("#image3").hover(function(){
    $("#text_three").fadeIn();
    }, function(){
    $("#text_three").fadeOut();
  });

  $("#image4").hover(function(){
    $("#text_four").fadeIn();
    }, function(){
    $("#text_four").fadeOut();
  });

  $("#image5").hover(function(){
    $("#text_five").fadeIn();
    }, function(){
    $("#text_five").fadeOut();
  });

  $("#image6").hover(function(){
    $("#text_six").fadeIn();
    }, function(){
    $("#text_six").fadeOut();
  });

  $("#image7").hover(function(){
    $("#text_seven").fadeIn();
    }, function(){
    $("#text_seven").fadeOut();
  });

  $("#image8").hover(function(){
    $("#text_eight").fadeIn();
    }, function(){
    $("#text_eight").fadeOut();
  });

  event.preventDefault();
});
