// INFINITE SCROLL
var rollingTween = new TimelineMax();
var time = 20;
var $rollingTextgoLeft = $(".infinite_text");
var $text = $(".text");

function startRolling() {
  $text.css({ width: "auto" });
  $text.width(width);
  var width = $text.width();

  rollingTween.to(".infinite_text", time, {
    x: -width,
    ease: Linear.easeNone,
    repeat: -1,
  });

  return rollingTween;
}

function rollingText() {
  $(".infinite_text").clone().appendTo("#about");
  startRolling();
}
rollingText();

function resizeCheck() {
  var progress = rollingTween.progress(); //record the progress so that we can match it with the new tween (jump to the same spot)
  rollingTween.time(0).kill(); //rewind and kill the original tween.
  //time = 5;

  startRolling().progress(progress); //create a new tween based on the new size, and jump to the same progress value.
}

resizeCheck();
$(window).resize(resizeCheck);

// var rollingTween;
// var $rollingText = $(".infinite_text");

// function startRolling() {
//   $rollingText.css({width:"auto"});
//   var width = $rollingText.width();
//   $rollingText.width(width);
//   rollingTween = TweenMax.to("#about", 10, {
//     x: -width,
//     ease: Linear.easeNone,
//     repeat: -1
//   }); 
//   return rollingTween;
// }

// function rollingText(){
//   $('#about .infinite_text').clone().appendTo(".rolling-text");
//   startRolling();   
// }

// function resizeCheck(){
//   var progress = rollingTween.progress(); //record the progress so that we can match it with the new tween (jump to the same spot)
//   rollingTween.time(0).kill(); //rewind and kill the original tween.
//   startRolling().progress(progress); //create a new tween based on the new size, and jump to the same progress value.
// }

// rollingText();
// $(window).resize(resizeCheck);