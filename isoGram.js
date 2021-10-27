function isoGram(str) {
	str = str.toLowerCase();
	let letters = [ ];

	for (let i = 0; i < str.length; i++) {
		if (letters.includes(str[i])) return false
		letters.push(str[i]);
	}
	return true;
}

console.log(isoGram(''))
