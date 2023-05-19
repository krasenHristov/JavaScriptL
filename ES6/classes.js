function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function(sound) {
  return sound || 'vroom';
}

function Toyota(options) {
  // Car.call(this, options) is the same as super(options) in ES6
  Car.call(this, options);
  this.color = options.color;
}

// what this does is it creates a new object with the prototype of Car
// and assigns it to Toyota.prototype so that we can use the methods of Car
// in Toyota without having to do Toyota.prototype.drive = function() { ... }
Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;


const toyota = new Toyota({ color: 'red', title: '1.2l Racer' });
console.log(toyota); // Toyota { title: '1.2l Racer', color: 'red' }
console.log(toyota.drive("hhhhh"));


const car = new Car({ title: 'Civic' });
console.log(car); // Car { title: 'Civic' }
console.log(car.drive()); // 'vroom'


// ES6
class Car2 {
  // like __init__ in python
  // this is like self in python
  // options is like **kwargs in python
  constructor(options) {
    this.title = options.title;
  }

  // methods are automatically added to the prototype
  // so we don't have to do Car.prototype.drive = function() { ... }
  drive(sound) {
    return sound || 'vroom';
	}
}

// extends is like inheritance in python (class Toyota(Car))
// super is like super() in python (super().__init__(options))
// super is a reference to the parent's constructor
// so we can call super(options) to call the parent's constructor
// and pass in the options
class Toyota2 extends Car2 {
  constructor(options) {
    super(options);
    this.color = options.color;
  }};

const toyota2 = new Toyota2({ color: 'red', title: '1.2l Racer' });
console.log(toyota2); // Toyota { title: '1.2l Racer', color: 'red' }
console.log(toyota2.drive("hhhhh")); // hhhhh


const car2 = new Car2({ title: 'Civic' });
console.log(car2); // Car { title: 'Civic' }
console.log(car2.drive()); // 'vroom'
