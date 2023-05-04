function showStars(rows) {
	for (let i = 1; i< rows + 1; i++) {
		let stars = "";
		for (let j = 0; j < i; j++) {
			stars += "*";
		}
		console.log(stars);
	}
}



function showPrimes(limit) {
	for (let number = 2; number <= limit; number++) {
		for (let factor = 2; factor <= number ; factor++) {
			if (number%factor === 0 & factor !== number) {
				break;
			}
			else {
				console.log(number);
				break;
			}	
}}}

showPrimes(20);
