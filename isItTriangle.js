function isItTriangle(a, b, c) {
	let check = ((a + b) > c) && ((b + c) > a) && ((c + a ) > b);
	return check;
}

isItTriangle(7, 2, 2)