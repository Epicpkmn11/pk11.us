if(localStorage.getItem("theme") == "light") {
	document.getElementById("theme").href = "";
} else if(localStorage.getItem("theme") == "dark") {
	document.getElementById("theme").href = "/assets/css/dark.css";
}

function changeTheme() {
	if(localStorage.getItem("theme") == "dark") { // Change to light
		document.getElementById("theme").href = "";
		localStorage.setItem("theme", "light")
	} else { // Change to dark
		document.getElementById("theme").href = "/assets/css/dark.css";
		localStorage.setItem("theme", "dark")
	}
}
