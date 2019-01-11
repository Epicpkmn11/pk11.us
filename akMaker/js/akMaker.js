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

function save() {
	var output = '';
	if(document.getElementById('batteryIcon').checked) {
		if(batteryScreen) output += "[battery icon]\nx = "+batteryX+"\ny = "+batteryY+"\nshow = 1\nscreen = "+1+"\n\n";
		else output += "[battery icon]\nx = "+batteryX+"\ny = "+(batteryY-192)+"\nshow = 1\nscreen = "+0+"\n\n";
	}

	if(document.getElementById('volumeIcon').checked) {
		if(volumeScreen) output += "[volume icon]\nx = "+volumeX+"\ny = "+volumeY+"\nshow = 1\nscreen = "+1+"\n\n";
		else output += "[volume icon]\nx = "+volumeX+"\ny = "+(volumeY-192)+"\nshow = 1\nscreen = "+0+"\n\n";
	}

	while(output.indexOf('\n') != -1) {
		output = output.replace("\n", "<br/>")
	}
	if(output != '') {
		document.getElementById('output').style.display = 'block';
		document.getElementById('output').innerHTML = output;
	} else {
		document.getElementById('output').style.display = 'none';
	}
}
