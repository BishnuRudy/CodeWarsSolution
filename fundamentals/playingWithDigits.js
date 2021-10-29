function powDigit(num, pow) {
	num = String(num).split('');
	let sum = 0;

	num.forEach( elem =>  {
		sum += parseInt(elem) ** pow;
		pow++;
	})

	return (sum / num) == parseInt(sum/num);

}

console.log(powDigit(89, 1));
