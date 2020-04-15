if(getTheme() == 'light') {
	document.getElementById('theme').href = '';
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
		document.getElementById('theme').href = '';
		setTheme('light');
	} else {
		document.getElementById('theme').href = '/assets/css/dark.css';
		setTheme('dark');
	}
}
