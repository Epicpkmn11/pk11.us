var lastOptionStartButton = 'none';
var batteryStartButton = true;
var startButtonX = 0;
var startButtonY = 0;
var startButtonW = 0;
var startButtonH = 0;

// StartButton
function showStartButton() {
	document.getElementById('startButtonDiv').style.display = 'block';
	moveStartButton();
}

function hideStartButton() {
	document.getElementById('startButtonDiv').style.display = 'none';
}

function moveStartButton() {
	if(document.getElementById('startButtonX').value != '') {
		startButtonX = document.getElementById('startButtonX').value;
	} else {
		startButtonX = 0;
	}
	if(document.getElementById('startButtonY').value != '') {
		startButtonY = document.getElementById('startButtonY').value;
	} else {
		startButtonY = 0;
	}
	if(document.getElementById('startButtonW').value != '') {
		startButtonW = document.getElementById('startButtonW').value;
	} else {
		startButtonW = 0;
	}
	if(document.getElementById('startButtonH').value != '') {
		startButtonH = document.getElementById('startButtonH').value;
	} else {
		startButtonH = 0;
	}

	var curHeight;
	var curWidth;

	if(startButtonX<0) startButtonX = 0;
	if(startButtonX>(256)) startButtonX = 256;
	if(startButtonY<0) startButtonY = 0;
	if(startButtonY>(192)) startButtonY = 192;

	if(startButtonW<0) startButtonW = 0;
	if(startButtonW>(256 - startButtonX)) startButtonW = 256 - startButtonX;
	if(startButtonH<0) startButtonH = 0;
	if(startButtonH>(192 - startButtonY)) startButtonH = 192 - startButtonY;

	document.getElementById('startButtonX').value = startButtonX;
	document.getElementById('startButtonY').value = startButtonY;
	document.getElementById('startButtonW').value = startButtonW;
	document.getElementById('startButtonH').value = startButtonH;

	startButtonY = parseInt(startButtonY) + 192;

	document.getElementById('startButtonDiv').style.left = startButtonX;
	document.getElementById('startButtonDiv').style.top = startButtonY;
	document.getElementById('startButtonDiv').style.width = startButtonW;
	document.getElementById('startButtonDiv').style.height = startButtonH;

	document.getElementById('startButtonDiv').style.color = document.getElementById('startButtonColor').value;

	document.getElementById('startButtonDiv').innerHTML = document.getElementById('startButtonText').value;
}

function calcColor(id) {
	b = dec2bin(Math.round(hexToRgb(id).b/(255/31)));
	g = dec2bin(Math.round(hexToRgb(id).g/(255/31)));
	r = dec2bin(Math.round(hexToRgb(id).r/(255/31)));

	color = parseInt("1"+b+g+r, 2).toString(16);

	return("0x"+color);
}