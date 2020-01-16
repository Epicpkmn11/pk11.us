if(getTheme() == 'light') {
	document.getElementById('theme').href = '/assets/css/light.css';
} else if(getTheme() == 'dark') {
	document.getElementById('theme').href = '/assets/css/dark.css';
}

function getTheme() {
	var theme = localStorage.getItem('theme');
	return theme;
}
function setTheme(theme) {
	localStorage.setItem('theme', theme);
}

function changeTheme() {
	if(getTheme() == 'dark') {
		document.getElementById('theme').href = '/assets/css/light.css';
		setTheme('light');
	} else {
		document.getElementById('theme').href = '/assets/css/dark.css';
		setTheme('dark');
	}
}
