function checkXoxoEqualCount(str) {
	str = str.toLowerCase();
	if (str.includes('o') && str.includes('x'))
		return str.match(/['o']/g).length == str.match(/['x']/g).length ? true : false;
	return str === ''? true: false;
}

// console.log(checkXoxoEqualCount(""));

function alternate(str) {
	let x = str.match(/[o]/ig);
	let o = str.match(/[x]/ig);

	return (x && x.length) ===  (o && o.length);
}

console.log(alternate('ooxx'));