const movie = {
	title: 'Rome',
	releaseYear: 2018,
	rating: 4.8,
	director: 'Steven Spielberg',
};




function showProperties(obj) {
	for (let key in obj)
		console.log(key+": "+obj[key]);
}

console.log(showProperties(movie));

let limit = 100;
let sumNum = 0;
function sum(limit) {

	for (let i = 0; i <= limit; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			sumNum += i;
		}
	}
	return sumNum;
}

console.log(sum(limit));





const marks = [80, 80, 50, 0, 100, 100, 100, 100, 32, 58];

function calculateAverageGrade(marks) {
	let marks_sum = 0

	// get the average
	for (let grade of marks) {
		marks_sum += grade
	}

	let average_mark = marks_sum / marks.length

	if (average_mark > 90) {
		console.log(average_mark)
		console.log("Cheaters")
	}
	else if (average_mark < 90) {
		console.log(average_mark)
		console.log("Failures")
	}
}

calculateAverageGrade(marks)
