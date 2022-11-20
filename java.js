

function copyEmail() {
  var copyText = document.getElementById("myEmail");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard.writeText(copyText.value);
  
  alert("Copied the text: " + copyText.value);
}


function playdisc() {
  document.getElementById('disc').className = 'discanim';
	var audio = document.getElementById("audio");
	audio.play();
}