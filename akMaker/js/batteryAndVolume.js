var lastOptionBattery = 'none';
var lastOptionVolume = 'none';
var batteryScreen = true;
var volumeScreen = true;
var batteryX = 0;
var batteryY = 0;
var volumeX = 0;
var volumeY = 0;

// Battery
function changeBattery() {
	document.getElementById(document.getElementById('batteryChoice').value).style.display = 'block';
	moveBattery();
	if(lastOptionBattery!='none' && lastOptionBattery!=document.getElementById('batteryChoice').value){
		document.getElementById(lastOptionBattery).style.display = 'none';
	}
	lastOptionBattery = document.getElementById('batteryChoice').value;
}

function hideBattery() {
	if(lastOptionBattery!='none'){
		document.getElementById(lastOptionBattery).style.display = 'none';
	}
}

function moveBattery() {
	batteryScreen = document.getElementById('batteryScreen').checked;

	if(document.getElementById('batteryX').value != '') {
		batteryX = document.getElementById('batteryX').value;
	} else {
		batteryX = 0;
	}
	if(document.getElementById('batteryY').value != '') {
		batteryY = document.getElementById('batteryY').value;
	} else {
		batteryY = 0;
	}

	var curHeight;
	var curWidth;

	var newImg = new Image();
	newImg.src = "theme/icons/" + document.getElementById('batteryChoice').value + ".bmp";

	if(batteryX<0) batteryX = 0;
	if(batteryX>(256 - newImg.width)) batteryX = 256 - newImg.width;
	if(batteryY<0) batteryY = 0;
	if(batteryY>(192 - newImg.height)) batteryY = 192 - newImg.height;

	document.getElementById('batteryX').value = batteryX;
	document.getElementById('batteryY').value = batteryY;

	if(!batteryScreen) {
		batteryY = parseInt(batteryY) + 192;
	}

	document.getElementById(document.getElementById('batteryChoice').value).style.left = batteryX;
	document.getElementById(document.getElementById('batteryChoice').value).style.top = batteryY;
}

// Volume
function changeVolume() {
	document.getElementById(document.getElementById('volumeChoice').value).style.display = 'block';
	moveVolume();
	if(lastOptionVolume!='none' && lastOptionVolume!=document.getElementById('volumeChoice').value){
		document.getElementById(lastOptionVolume).style.display = 'none';
	}
	lastOptionVolume = document.getElementById('volumeChoice').value;
}
function hideVolume() {
	if(lastOptionVolume!='none'){
		document.getElementById(lastOptionVolume).style.display = 'none';
	}
}

function moveVolume() {
	volumeScreen = document.getElementById('volumeScreen').checked;

	if(document.getElementById('volumeX').value != '') {
		volumeX = document.getElementById('volumeX').value;
	} else {
		volumeX = 0;
	}
	if(document.getElementById('volumeY').value != '') {
		volumeY = document.getElementById('volumeY').value;
	} else {
		volumeY = 0;
	}

	var curHeight;
	var curWidth;

	var newImg = new Image();
	newImg.src = "theme/icons/" + document.getElementById('volumeChoice').value + ".bmp";

	if(volumeX<0) volumeX = 0;
	if(volumeX>(256 - newImg.width)) volumeX = 256 - newImg.width;
	if(volumeY<0) volumeY = 0;
	if(volumeY>(192 - newImg.height)) volumeY = 192 - newImg.height;

	document.getElementById('volumeX').value = volumeX;
	document.getElementById('volumeY').value = volumeY;

	if(!volumeScreen) {
		volumeY = parseInt(volumeY) + 192;
	}

	document.getElementById(document.getElementById('volumeChoice').value).style.left = volumeX;
	document.getElementById(document.getElementById('volumeChoice').value).style.top = volumeY;
}
