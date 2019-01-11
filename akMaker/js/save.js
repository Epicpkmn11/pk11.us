function save() {
	var output = '';

	// [start button]
	output += "[start button]\nx = "+startButtonX+"\ny = "+(startButtonY-192)+"\nw = "+startButtonW+"\nh = "+startButtonH+"\ntextColor = "+calcColor(document.getElementById('startButtonColor').value)+"\nfile = none\ntext = "+document.getElementById('startButtonText').value+"\n\n";

	// [folderup btn]
	output += "[folderup btn]\nx = "+folderUpX+"\ny = "+(folderUpY-192)+"\nw = "+folderUpW+"\nh = "+folderUpH+"\n\n";

	// [battery icon]
	if(document.getElementById('batteryIcon').checked) {
		if(batteryScreen) output += "[battery icon]\nx = "+batteryX+"\ny = "+batteryY+"\nshow = 1\nscreen = "+1+"\n\n";
		else output += "[battery icon]\nx = "+batteryX+"\ny = "+(batteryY-192)+"\nshow = 1\nscreen = "+0+"\n\n";
	}

	// [volume icon]
	if(document.getElementById('volumeIcon').checked) {
		if(volumeScreen) output += "[volume icon]\nx = "+volumeX+"\ny = "+volumeY+"\nshow = 1\nscreen = "+1+"\n\n";
		else output += "[volume icon]\nx = "+volumeX+"\ny = "+(volumeY-192)+"\nshow = 1\nscreen = "+0+"\n\n";
	}

	// Convert \n to <br/>
	while(output.indexOf('\n') != -1) {
		output = output.replace("\n", "<br/>")
	}

	// Show output
	if(output != '') {
		for(var i = 0; i < document.getElementsByClassName('output').length; i++){
			document.getElementsByClassName('output')[i].style.display = 'block';
		}
		document.getElementById('output').innerHTML = output;
	} else {
		for(var i = 0; i < ddocument.getElementsByClassName('output').length; i++){
			document.getElementsByClassName('output')[i].style.display = 'none';
		}
	}
}