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
	} else {
		hideFolderUp();
		hideBattery();
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
			document.getElementsByClassName('clickArea')[i].style.display = 'block';
		}
	} else {
		for(var i = 0; i < document.getElementsByClassName('clickArea').length; i++){
			document.getElementsByClassName('clickArea')[i].style.display = 'none';
		}
	}
}
