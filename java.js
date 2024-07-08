function copyEmail() {
  var copyText = document.getElementById("myEmail");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard.writeText(copyText.value);
  
  alert("Copied the text: " + copyText.value);
}


function playdisc() {
	var audio = document.getElementById("audio");
	if (audio.duration > 0 && !audio.paused) {
				document.getElementById('disc').className = 'disc';
                audio.pause();
            } else {
                audio.play();
				document.getElementById('disc').className = 'discanim';
			}
}


$(window).on("load", function(){
	$(".loading").fadeOut("slow");
	$("body").removeClass("preload");
})



function opensamplesite(iframeid, samplesitesrc) {
    const divcont = document.getElementById("samplesitecont");
    const alliframes = divcont.getElementsByTagName("iframe");
    const iframe = document.getElementById(iframeid);
  
    const addsamplesite = document.createElement('iframe');
    addsamplesite.src = (samplesitesrc);
    addsamplesite.classList.add("samplesite");
    addsamplesite.setAttribute("id", iframeid);

    for (const ifr of alliframes) {
      if ((ifr.id != iframeid) || (iframe != null)) {
        divcont.removeChild(ifr);
      }
    }
    
    if (iframe == null) {
      divcont.appendChild(addsamplesite);
    }
  }
