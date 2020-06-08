if(localStorage["theme"] == "light") {
	document.getElementById("theme").href = "";
} else if(localStorage["theme"] == "dark") {
	document.getElementById("theme").href = "/assets/css/dark.css";
}

function changeTheme() {
	if(localStorage["theme"] == "dark") { // Change to light
		document.getElementById("theme").href = "";
		localStorage["theme"] = "light";
	} else { // Change to dark
		document.getElementById("theme").href = "/assets/css/dark.css";
		localStorage["theme"] = "dark";
	}
}
