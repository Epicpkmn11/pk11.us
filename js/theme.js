$(document).ready(function () {
	if(getTheme()) {
		document.getElementById('theme').href = document.getElementById('theme').href.substr(0, document.getElementById('theme').href.lastIndexOf('/')) + '/light.css';
	} else {
		document.getElementById('theme').href = document.getElementById('theme').href.substr(0, document.getElementById('theme').href.lastIndexOf('/')) + '/dark.css';
	}
});

function getTheme(){
	var theme = localStorage.getItem('theme');
	return theme == '1';
}
function setTheme(theme){
	localStorage.setItem('theme', (theme ? '1' : '0'));
}

function changeTheme() {
	if(!getTheme()) {
		document.getElementById('theme').href = document.getElementById('theme').href.substr(0, document.getElementById('theme').href.lastIndexOf('/')) + '/light.css';
		setTheme(true);
	} else {
		document.getElementById('theme').href = document.getElementById('theme').href.substr(0, document.getElementById('theme').href.lastIndexOf('/')) + '/dark.css';
		setTheme(false);
	}
}
