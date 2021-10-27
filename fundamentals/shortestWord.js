function shortestWord(string) {
	let words = string.split(/\s+/); //\s refers to single space and \s+ refers to at least one or more space
	return words.reduce( (accm, elem) => {
		let smallest = accm;
		if(elem.length < smallest.length)
			smallest = elem;
		return smallest;
	} )	
}

console.log(shortestWord("apple is fruit"));