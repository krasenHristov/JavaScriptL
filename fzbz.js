const fizzBuzz = (n) => {
	for (let i=0; i<n+1 ; i++) {
		let output = "";
		if (i % 3 == 0) output += "Fizz ";
		if (i % 5 == 0) output += "Buzz";
		if (output == "") output = i;
		console.log(output);
}
}

fizzBuzz(215);
