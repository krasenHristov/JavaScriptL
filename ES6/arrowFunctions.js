// arrow functions
// Arrow functions are a new way to write functions in ES6. 
// They have a shorter syntax than function expressions and do not have their own this, 
// arguments, super, or new.target. 
// These functions are best suited for non-method functions,
// and they cannot be used as constructors.

// Arrow functions are always anonymous. Meaning, they cannot be named.
// They are always expressions, and cannot be used as function declarations.

const add = (a, b) => a + b;

// vs 

function add2(a, b) {
  return a + b;
}

console.log(add(1, 2));
console.log(add2(1, 2));

// Returning objects
// If you want to return an object, you must wrap the object in parentheses.
// This is because the JavaScript engine will think 
// the curly braces are the start of a function

const getPerson = (name, age, gender) => ({ name: name, age: age, gender:gender });

console.log(getPerson("John", 32, "male"));

// Arrow functions and this keyword
// Arrow functions do not have their own this keyword.
// The value of this inside an arrow function remains the same
// throughout the lifecycle of the function and is always bound to the value of this
// in the closest non-arrow parent function.
// If the arrow function is used outside of any function,
// then this will always refer to the window object.
// This is different from regular functions, which have their own this value.
// The value of this inside a regular function depends on how the function is called.
// If the function is called as a method of an object,
// then this will refer to the parent object.

// Example 1
const person = {
  name: "John",
  age: 32,
};

const greeting = () => {
console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
}

person.greeting = greeting;

person.greeting(); // undefined because this refers to the window object

// Example 2
const person2 = {
  name: "John",
  age: 32,
};

const greeting2 = () => {
  console.log(`Hi, I'm ${person2.name} and I'm ${person2.age} years old`);
}

person2.greeting = greeting2;

person2.greeting(); // Hi, I'm John and I'm 32 years old

// Example 3
const person3 = {
  name: "John",
  age: 32,
};

function greeting3() {
  console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
}

person3.greeting = greeting3;

person3.greeting(); // Hi, I'm John and I'm 32 years old
