function calcColor() {
	b = dec2bin(Math.round(hexToRgb(document.getElementById('color').value).b/(255/31)));
	g = dec2bin(Math.round(hexToRgb(document.getElementById('color').value).g/(255/31)));
	r = dec2bin(Math.round(hexToRgb(document.getElementById('color').value).r/(255/31)));

	color = parseInt("1"+b+g+r, 2).toString(16);

	return("0x"+color);
}