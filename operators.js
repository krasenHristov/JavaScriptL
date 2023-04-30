// arithmetic operators
console.log(1 + 1);

// string concatenation
console.log("hello" + "world");

// assignment operators
var x = 5;
x++; // 6
x += 1; // 7
x--; // 6
x -= 1; // 5
x *= 3; // 15
x /= 2; // 7.5
console.log(x);

// comparison operators
console.log(5 > 3);
//(5 < 3);
//(5 >= 3);
//(5 <= 3);
let equality = undefined;
//(5 === 3);
//(5 !== 3);
let loseEquality = undefined;
//(5 == 3);
//(5 != 3);
//in this case == and === are the same because they are both comparing numbers
//however, === is more strict and will not convert types
// == will convert types so "5" == 5 is true but "5" === 5 is false

// logical operators && and || are short-circuit operators 
// (they stop evaluating as soon as they can)
console.log(true && false);

// if-else statement
function g(x) {

	if (x > 3) {
		return true;
	}

	else {
		return false;
	}
	};

console.log(g(5));

// if-else if-else statement
function h(x) {
	if (x > 3) {
		return true;
	}
	else if (x < 3) 
	{
		return false;
	}
	else {
		return "equal";
}
};

console.log(h(3));

if (1 != 1) {
	console.log("true");
}
else {
	console.log("false");
}
