if(!localStorage.visitCount)
	localStorage.visitCount = 0;
localStorage.visitCount++;

const eyes = ['O', 'o', 'U', 'u', '>', '^', '-', 'X', 'T', 'q'];
const mouths = ['w', 'u', 'o', '\\_', '-', 'x', '///'];
const extras = [['', ''], ['', ''], ['', ''], ['', '-☆'], ['=', '='], ['d', 'b♪']];

function face() {
	let eye = eyes[Math.floor(Math.random() * eyes.length)];
	let mouth;
	do {
		mouth = mouths[Math.floor(Math.random() * mouths.length)];
	} while(mouth.toLowerCase() == eye.toLowerCase());
	let extra = extras[Math.floor(Math.random() * extras.length)];
	
	return extra[0] + eye + mouth + eye + extra[1];
}

const splashes = [
	"Hey .o/",
	"Nintendo DSi!",
	"ニンテンドーDSi!",
	"닌텐도 DSi!",
	"30 Pin > Lightning",
	"Kyocera GRATINA 4G! <small>Flip phones are still cool, right?</small>",
	"ピーケー十一",
	"私は日本語を話します！えとー…よくない…",
	"TWL-001 (JPN)をプレイ中",
	"TWL-001 (KOR)をプレイ中",
	"iPod nano 6 is the best smart watch!",
	"メロエッタは私の好きなポケモンです",
	"行くぜっ！怪盗少女 is a good song",
	"Twemoji are the best emoji",
	"Why does 😜 have a white around the open eye <small>it creeps me out</small>",
	`You've been to this page ${localStorage.visitCount} time${localStorage.visitCount == 1 ? "" : "s"}!`,
	"<a href=\"javascript:/*quit_looking_at_the_link...thats_rude...*/!confirm('bwa ha ha! you are hackifyed!')?confirm('what do you mean no? thats rude :pout:')?null:window.open('https://youtu.be/dQw4w9WgXcQ','_self', ''):document.documentElement.style.setProperty('--primary','#'+Math.floor(Math.random()*0xFFFFFF).toString(16));\">Click me</a> to get <s>hacked</s> free cool stuff!",
	"<span onmouseover=\"event.target.innerText = face();\" onmouseout=\"event.target.innerText = 'UwU';\">UwU</span>"
];

document.getElementById("splash").innerHTML = splashes[Math.floor(Math.random() * splashes.length)];
