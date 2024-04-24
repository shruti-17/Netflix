
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".netflix-navbar").css("background" , "#0C0C0C");
        }
  
        else{
            $(".netflix-navbar").css("background" , "transparent");  	
        }
    });

  })


function position(id){
  var card = document.getElementsByClassName('card')[id];
  // card.style.transform = 'scale(1.5)';
  console.log(id)
}
function toggleMute() {
  var video = document.getElementById("myVideo");
  video.muted = !video.muted; // Toggle the muted state
  
  // Update button text based on muted state
  var buttonText = document.getElementById("muteText");
  if (video.muted) {
    buttonText.innerText = "Unmute";
  } else {
    buttonText.innerText = "Mute";
  }
}

