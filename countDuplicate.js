function countDuplicate(string) {
	string = string.toLowerCase();
	let dupChars = {};
	let duplicateCounter = 0;

	for( let i = 0; i < string.length; i++ ) {
		if (!(dupChars.hasOwnProperty(string[i])))
			dupChars[string[i]] = 1;
		else 
			dupChars[string[i]] += 1;
	}

	console.log(dupChars)

	for (let char in dupChars) {
		if (dupChars[char] != 1) {
			duplicateCounter += 1;
		}
	}

	return duplicateCounter;
}

console.log(countDuplicate("aaapplleess"));