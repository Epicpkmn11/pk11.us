var lastOptionFolderUp = 'none';
var batteryFolderUp = true;
var folderUpX = 0;
var folderUpY = 0;
var folderUpW = 0;
var folderUpH = 0;

// FolderUp
function showFolderUp() {
	document.getElementById('folder_up').style.display = 'block';
	moveFolderUp();
}

function hideFolderUp() {
	document.getElementById('folder_up').style.display = 'none';
}

function moveFolderUp() {
	if(document.getElementById('folderUpX').value != '') {
		folderUpX = document.getElementById('folderUpX').value;
	} else {
		folderUpX = 0;
	}
	if(document.getElementById('folderUpY').value != '') {
		folderUpY = document.getElementById('folderUpY').value;
	} else {
		folderUpY = 0;
	}
	if(document.getElementById('folderUpW').value != '') {
		folderUpW = document.getElementById('folderUpW').value;
	} else {
		folderUpW = 0;
	}
	if(document.getElementById('folderUpH').value != '') {
		folderUpH = document.getElementById('folderUpH').value;
	} else {
		folderUpH = 0;
	}

	var curHeight;
	var curWidth;

	var newImg = new Image();
	newImg.src = "theme/folder_up.bmp";

	if(folderUpX<0) folderUpX = 0;
	if(folderUpX>(256 - newImg.width)) folderUpX = 256 - newImg.width;
	if(folderUpY<0) folderUpY = 0;
	if(folderUpY>(192 - newImg.height)) folderUpY = 192 - newImg.height;

	if(folderUpW<0) folderUpW = 0;
	if(folderUpW>(256 - folderUpX)) folderUpW = 256 - folderUpX;
	if(folderUpH<0) folderUpH = 0;
	if(folderUpH>(192 - folderUpY)) folderUpH = 192 - folderUpY;

	document.getElementById('folderUpX').value = folderUpX;
	document.getElementById('folderUpY').value = folderUpY;
	document.getElementById('folderUpW').value = folderUpW;
	document.getElementById('folderUpH').value = folderUpH;

	folderUpY = parseInt(folderUpY) + 192;

	document.getElementById('folder_up').style.left = folderUpX;
	document.getElementById('folder_up').style.top = folderUpY;

	document.getElementById('folder_upDiv').style.left = folderUpX;
	document.getElementById('folder_upDiv').style.top = folderUpY;
	document.getElementById('folder_upDiv').style.width = folderUpW;
	document.getElementById('folder_upDiv').style.height = folderUpH;
}