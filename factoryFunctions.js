function createCircle(radius) {
  return {
    radius,

    draw() {
	console.log('draw');
	   }

	};
}

const circle = createCircle(1);
console.log(circle); // {radius: 1, draw: ƒ}
circle.draw(); // draw

// Constructor Function
function Circle (radius) {
  this.radius = radius;
    this.draw = function() {
      console.log('draw');
	};
}

// new operator creates an empty object, then sets this to point to that object, 
// then returns the object from the function
const another = new Circle(1); 
onsole.log(another); // Circle { radius: 1, draw: [Function] }

let x = {};
// let x = new Object();
// new String(); '', "", ``
// new Boolean(); true, false
// new Number(); 1, 2, 3, ...
// new Function(); - function() {}
// new Array(); - [], [1, 2, 3, ...]
// new RegExp() - used to work with regular expressions
// new Error() - used to handle errors in JS
// new Symbol() - used to create unique identifiers for objects
// new Map() - used to store key-value pairs
// new Set() - used to store unique values of any type
// new WeakMap() - used to store weak objects in a map
// new WeakSet() - used to store weak objects in a set
// new Date() - used to work with dates and times in JS
// new Promise()- used to write async code in a cleaner way (ES6)


const Circle1 = new Function('radius', `
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
	};
`);

const circle1 = new Circle1(1);

const another1 = new Circle(1);

// the {} in the parameter is the same as new Object()
Circle.call({}, 1);

// apply is the same as call, but the second parameter is an array
// meaning that the array elements will be passed as arguments to the function
Circle.apply({}, [1, 2, 3]);
