window.onbeforeunload = function() { return "Are you sure you want to leave?"; }

function aud_play_pause() {
	var myAudio = document.getElementById("myAudio");
	if (myAudio.paused) {
		myAudio.play();
	} 
	else {
		myAudio.pause(); document.getElementById('myAudio').currentTime = 0;
	}
}


function barPercentage(el,styleProp){ //from ppk's quirksmode
    var x = document.getElementById(el);
    if (x.currentStyle)
        var y = x.currentStyle[styleProp];
    else if (window.getComputedStyle)
        var y = document.defaultView.getComputedStyle(x,null).getPropertyValue(styleProp);
    return y;
}

setInterval( function() {
	var perc = barPercentage('loading-bar','width').replace("px","");
	var res = Math.round(parseFloat(perc)/9);
	document.getElementById("bar-percentage").innerHTML = res + "%";

}, 0);