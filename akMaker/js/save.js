function save() {
	var output = '';

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
		document.getElementById('output').style.display = 'block';
		document.getElementById('output').innerHTML = output;
	} else {
		document.getElementById('output').style.display = 'none';
	}
}