let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = [];

for(let i=0; i<numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

console.log(doubledNumbers)

// same as
// this is a function that takes a function as an argument
// and calls that function on each element of the array
//
// return does not stop the loop like it does in a regular function
// instead it returns a new element for each element in the array
// similar to list comprehension in python
let doubled = numbers.map(function(number) {
  return number * 2;
});

console.log(doubled)

// same as
let doubled2 = numbers.map(number => number * 2);

console.log(doubled2)

////////////////////////////////////////////////////////
var cars = [
  { model: 'Buick', price: 'CHEAP' },
  { model: 'Camaro', price: 'expensive' }
];

var prices = cars.map(function(car) {
  return car.price;
});

console.log(prices)
