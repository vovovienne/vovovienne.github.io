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


function showtext () {
	document.getElementById('illust1desc').className = 'textreveal';
}

function hidetext () {
	document.getElementById('illust1desc').className = 'illust1desc';
}

function showtext2 () {
	document.getElementById('illust2desc').className = 'textreveal';
}

function hidetext2 () {
	document.getElementById('illust2desc').className = 'illust2desc';
}

function showtext3 () {
	document.getElementById('illust3desc').className = 'textreveal';
}

function hidetext3 () {
	document.getElementById('illust3desc').className = 'illust3desc';
}

function showtext4 () {
	document.getElementById('illust4desc').className = 'textreveal';
}

function hidetext4 () {
	document.getElementById('illust4desc').className = 'illust4desc';
}

function showtext5 () {
	document.getElementById('illust5desc').className = 'textreveal';
}

function hidetext5 () {
	document.getElementById('illust5desc').className = 'illust5desc';
}

function showtext6 () {
	document.getElementById('illust6desc').className = 'textreveal';
}

function hidetext6 () {
	document.getElementById('illust6desc').className = 'illust6desc';
}

function showtext7 () {
	document.getElementById('illust7desc').className = 'textreveal';
}

function hidetext7 () {
	document.getElementById('illust7desc').className = 'illust7desc';
}


function showtext8 () {
	document.getElementById('illust8desc').className = 'textreveal';
}

function hidetext8 () {
	document.getElementById('illust8desc').className = 'illust8desc';
}


$(window).on("load", function(){
	$(".loading").fadeOut("slow");
	$("body").removeClass("preload");
})
