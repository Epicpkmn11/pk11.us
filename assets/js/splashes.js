const splashes = [
	"Hey .o/",
	"Nintendo DSi!",
	"ニンテンドーDSi!",
	"닌텐도 DSi!",
	"Anyone else still use ニンテンドーDSiサウンド?",
	"30 Pin > Lightning",
	"Kyocera GRATINA 4G! <small>Flip phones are still cool, right?</small>",
	"ピーケー十一",
	"私は日本語を話します！えとー…よくない…",
	"TWL-001 (JPN)をプレイ中",
	"TWL-001 (KOR)をプレイ中",
	"iPod nano 6 is the best smart watch!",
	"メロエッタは私の好きなポケモンです",
	"아이 캔 소르타 리드 한글... (디스 이스 인 엔글리쉬, 밭 노 구글 트란스랱 니덷!)",
	"行くぜっ！怪盗少女 is a good song",
	"Twemoji are the best emoji",
	"Why does the ;P emoji have a white around the open eye <small>it creeps me out</small>"
]

document.getElementById("splash").innerHTML = splashes[Math.floor(Math.random() * splashes.length)];
