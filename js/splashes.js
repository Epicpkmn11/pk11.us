$(document).ready(function () {
	RandomSplash();
});

function RandomSplash() {
	splashes = [
	"That one guy who made the HBChecker script",
	"<span style=\"color:#900;\">Bumper</span> <span style=\"color:#00c;\">Boys</span> <span style=\"color:#900;\">with</span> <span style=\"color:#00c;\">a</span> <span style=\"color:#900;\">Z</span><span style=\"color:#00c;\">!</span>",
	"<em>#DSiBestConsole!</em>",
	"Anyone else still use <span style=\"font-size:80%;\">ニンテンドー</span>DSi<span style=\"font-size:80%;\">サウンド</span>?",
	"<a href=\"https://twitter.com/@ComoBEASTBot\">@ComoBEASTBot</a> ← The <em>coolest</em> Twitter ;P",
	".o/",
	"30 Pin > Lightning",
	"I still use an iPhone 4S ;P <span style=\"font-size:80%\">(And an iPad 2...</span> <span style=\"font-size:70%\">And a DSi... </span><span style=\"font-size:60%\">And an iPod... </span><span style=\"font-size:50%\">Is it 2011?)</span>"
	]
	document.getElementById('splash').innerHTML = splashes[Math.floor(Math.random() * 8)];
}
