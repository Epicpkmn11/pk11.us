var lastOption = 'none';
var lastOptionBattery = 'none';
var batteryScreen = false;
var batteryX = 0;
var batteryY = 0;

function showOptions() {
	if(document.getElementById('optionChoice').value != 0){
		for(var i = 0; i < document.getElementsByClassName(document.getElementById('optionChoice').value).length; i++){
			document.getElementsByClassName(document.getElementById('optionChoice').value)[i].style.display = 'block';
		}
	}
	if(lastOption != 'none') {
		for(var i = 0; i < document.getElementsByClassName(lastOption).length; i++) {
			for(var i = 0; i < document.getElementsByClassName(document.getElementById('optionChoice').value).length; i++){
				if(document.getElementsByClassName(document.getElementById('optionChoice').value)[i] == document.getElementsByClassName(document.getElementById('optionChoice').value)[i]) {

				}
				document.getElementsByClassName(lastOption)[i].style.display = 'none';
			}
		}
		lastOption = document.getElementById('optionChoice').value;
	}
}

function update() {
	if(document.getElementById('batteryIcon').checked) {
		document.getElementById('batteryDiv').style.display = "block";
		changeBattery();
	}
}

function changeBattery() {
	document.getElementById(document.getElementById('batteryChoice').value).style.display = 'block';
	moveBattery();
	if(lastOptionBattery!='none'){
		document.getElementById(lastOptionBattery).style.display = 'none';
	}
	lastOptionBattery = document.getElementById('batteryChoice').value;
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
	newImg.src = "img/icons/" + document.getElementById('batteryChoice').value + ".bmp";

	if(batteryX<0) batteryX = 0;
	if(batteryX>(192 - newImg.width)) batteryX = 256 - newImg.width;
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
