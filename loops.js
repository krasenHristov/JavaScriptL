let listOfMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July' 
, 'August', 'September', 'October', 'November', 'December'];

// movies object
let movies = {
	movie1: 'The Godfather',
	movie2: 'The Shawshank Redemption',
	movie3: 'Schindler\'s List',
	movie4: 'Raging Bull',
	movie5: 'Casablanca',
	movie6: 'Citizen Kane',
	movie7: 'Gone with the Wind',
	movie8: 'The Wizard of Oz',
	movie9: 'One Flew Over the Cuckoo\'s Nest',
	movie10: 'Lawrence of Arabia'
	};


for (let month of listOfMonths) {
    //console.log(month); // returns value 
}
for (let index in listOfMonths) {
    //console.log(index); // returns index number
}

for (i=0; i<listOfMonths.length; i++) {
    //console.log(listOfMonths[i]); // returns value through index
}

for (let movie in movies) {
//	console.log(movie, movies[movie]); // returns index and value
}

// while loop

let a = 0;
while (a < listOfMonths.length) {
	console.log(listOfMonths[a]); // returns value through index
	a++;
}

// do while loop

let b = 13;
do {
console.log("execute before check");
} while (b < listOfMonths.length); // returns value through index

