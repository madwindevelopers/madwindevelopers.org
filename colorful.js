var red = 255;
var green = 0;
var blue = 0;
var maxColorValue = 255;
var backgroundColor = rgbToHex(red, green, blue);
document.body.style.background = backgroundColor;

function changeBackground(color) {
	document.body.style.background = color;
}

function cycleBackgroundColor() {
	setInterval(newChange, 5);
}

/*function change() {
	if (red <= maxColorValue) {
		red++;
		changeBackground(rgbToHex(red, green, blue));
	} else {red = 0;}
	if (green <= maxColorValue) {
		green++;
		changeBackground(rgbToHex(red, green, blue));
	} else {green = 0;}
	if (blue <= maxColorValue) {
		blue++;
		changeBackground(rgbToHex(red, green, blue));
	} else {blue = 0};
*/
/*	while(true) {
		while (red < 256) {
			red++;
			backgroundColor = rgbToHex(red, green, blue);
			changeBackground(backgroundColor);
		}
		while (green < 256) {
			green++;
			backgroundColor = rgbToHex(red, green, blue);
			changeBackground(backgroundColor);
		}
		while (blue < 256) {
			blue ++;
			backgroundColor = rgbToHex(red, green, blue);
			changeBackground(backgroundColor);
		}
	}*/
//}

function newChange() {

	console.log(red, green, blue);

	if (red < 0) {red = 0;}
	if (green < 0) {green =0;}
	if (blue < 0) {blue = 0;}	
	if (red > maxColorValue) {red = maxColorValue;}
	if (green > maxColorValue) {green = maxColorValue;}
	if (blue > maxColorValue) {blue = maxColorValue;}
	
	
	/*
		turn situations
	*/
	if (red == maxColorValue && green == maxColorValue) {red--;}
	
	if (green == maxColorValue && blue == maxColorValue) {green--;}
	
	if (red == maxColorValue && blue == maxColorValue) {blue--;}
	
	if (red == 0 && green == 0) {red++;}
	
	if (green == 0 && blue == 0) {green++;}
	
	if (red == 0 && blue == 0) {blue++;}
	/*
		end turn situations
	*/
	

	if (red == maxColorValue && 
		green < maxColorValue && 
		blue == 0				) {green++;}
	
	if (red < maxColorValue && 
		green == maxColorValue && 
		blue == 0				) {red--;}
	
	if (red == 0 && 
		green == maxColorValue && 
		blue < maxColorValue	) {blue++;}
	
	if (red == 0 && 
		green < maxColorValue && 
		blue == maxColorValue	) {green--;}
	
	if (red < maxColorValue && 
		green == 0 && 
		blue == maxColorValue	) {red++;}
	
	if (red == maxColorValue && 
		green == 0 && 
		blue < maxColorValue	) {blue--;}	
		
	backgroundColor = rgbToHex(red, green, blue);	
	console.log(backgroundColor);
	changeBackground(backgroundColor);

}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
	console.log(r, g, b);
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}