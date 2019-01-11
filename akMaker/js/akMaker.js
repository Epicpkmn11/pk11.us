var lastOption = 'none';

function showOptions() {
	for(var i = 0; i < document.getElementsByClassName('config').length; i++) {
		document.getElementsByClassName('config')[i].style.display = 'none';
	}
	if(document.getElementById('optionChoice').value != 'none'){
		for(var i = 0; i < document.getElementsByClassName(document.getElementById('optionChoice').value).length; i++){
			document.getElementsByClassName(document.getElementById('optionChoice').value)[i].style.display = 'block';
		}
	}
}

function update() {
	if(document.getElementById('batteryIcon').checked) {
		document.getElementById('batteryDiv').style.display = "block";
		changeBattery();
	} else {
		document.getElementById('batteryDiv').style.display = "none";
		hideBattery();
	}

	if(document.getElementById('volumeIcon').checked) {
		document.getElementById('volumeDiv').style.display = "block";
		changeVolume();
	} else {
		document.getElementById('volumeDiv').style.display = "none";
		hideVolume();
	}
}

