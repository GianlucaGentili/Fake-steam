// Return on top button

let returnButton = document.getElementById("btnontop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    returnButton.style.display = "block";
  } else {
    returnButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



// function PlaySound(soundobj) {
//     var thissound = document.getElementById(soundobj);
//     thissound.play();
//   }
  
//   function StopSound(soundobj) {
//     var thissound = document.getElementById(soundobj);
//     thissound.pause();
//     thissound.currentTime = 0;
//   }
  
