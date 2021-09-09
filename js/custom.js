$(document).ready(function() {
// type js

var typed = new Typed('.typed', {
  strings: [
    "Web Designer.",
    "Web Developer.",
    "Freelancer."
  ],
  typeSpeed:50,
  backSpeed:50,
  startDelay:100,
  backDelay:1000,

  loop: true,
  loopCount: Infinity,

  showCursor: true,
  cursorChar: '|',
  autoInsertCss: true,


});

// particles js

});


// js code start here

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var scrollHeader = $(window);
var sticky = scrollHeader.scrollTop();

scrollHeader.scroll(function () {
  if(scrollHeader.scrollTop() > sticky){
    $('.header').addClass('scrollUp');
  }
  else{
    $('.header').removeClass('scrollUp');
  }
  
  sticky = scrollHeader.scrollTop();
})



