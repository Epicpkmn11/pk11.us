var lastOption = 'none';

function showOptions() {
	for(var i = 0; i < document.getElementsByClassName('config').length; i++) {
		document.getElementsByClassName('config')[i].style.display = 'none';
	}
	if(document.getElementById('optionChoice').value != 'none') {
		for(var i = 0; i < document.getElementsByClassName(document.getElementById('optionChoice').value).length; i++){
			document.getElementsByClassName(document.getElementById('optionChoice').value)[i].style.display = 'block';
		}
	}

	if(document.getElementById('optionChoice').value != 'none') {
		showFolderUp();
		showStartButton();
	} else {
		hideFolderUp();
		hideBattery();
		hideStartButton();

		document.getElementById('batteryIcon').checked = false;
		hideVolume();
		document.getElementById('volumeIcon').checked = false;
		update();
	}
}

function update() {
	if(document.getElementById('batteryIcon').checked) {
		document.getElementById('batteryDiv').style.display = 'block';
		changeBattery();
	} else {
		document.getElementById('batteryDiv').style.display = 'none';
		hideBattery();
	}

	if(document.getElementById('volumeIcon').checked) {
		document.getElementById('volumeDiv').style.display = 'block';
		changeVolume();
	} else {
		document.getElementById('volumeDiv').style.display = 'none';
		hideVolume();
	}
}

function showClickArea() {
	if(document.getElementById('showClickArea').checked) {
		for(var i = 0; i < document.getElementsByClassName('clickArea').length; i++){
			document.getElementsByClassName('clickArea')[i].style.background = 'rgba(255, 255, 0, 0.5)';
		}
	} else {
		for(var i = 0; i < document.getElementsByClassName('clickArea').length; i++){
			document.getElementsByClassName('clickArea')[i].style.background = 'rgba(255, 255, 0, 0)';
		}
	}
}

function hexToRgb(hex) {
	// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	hex = hex.replace(shorthandRegex, function(m, r, g, b) {
			return r + r + g + g + b + b;
	});

	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
	} : null;
}

function dec2bin(dec) {
	var bin = (dec >>> 0).toString(2);
	while(bin.length < 5){
		bin = '0' + bin;
	}
	return bin;
}

function calcColor(id) {
	b = dec2bin(Math.round(hexToRgb(id).b/(255/31)));
	g = dec2bin(Math.round(hexToRgb(id).g/(255/31)));
	r = dec2bin(Math.round(hexToRgb(id).r/(255/31)));

	color = parseInt("1"+b+g+r, 2).toString(16);

	return("0x"+color);
}
