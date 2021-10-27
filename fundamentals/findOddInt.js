function oddIntFinder(numbers) {
	let dupNums = {};

	numbers.forEach(elem => {
		if (!dupNums.hasOwnProperty(elem)) dupNums[elem] = 1;
		else dupNums[elem] += 1;
	})
	console.log(dupNums)
	for (let num in dupNums) {
		if (!(dupNums[num] % 2 == 0)) {
			return num
		}
	}
	return null;
}

console.log(oddIntFinder([0]));