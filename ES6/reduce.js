const numbers = [10, 20, 30, 40, 50];

let sum = 0;

for (let number of numbers) {
  sum += number;
}

console.log(sum); // 150

// reduce
// the 0 at the end is the initial value of the accumulator
// the accumulator is the sum of all the previous values
let sum2 = numbers.reduce(function (sum, number) {
  return sum + number;
}, 0);

console.log(sum2); // 150

// reduce with arrow function

let sum3 = numbers.reduce((sum, number) => sum + number);

console.log(sum3); // 150


const names = [
  { name: 'John' },
  { name: 'Paul' },
  { name: 'George' },
  { name: 'Ringo' }
];

// [] is the initial value of the accumulator (an empty array)
let beatles = names.reduce(function (accumulator, beatle) {
  accumulator.push(beatle.name);
    return accumulator;
}, []);

console.log(beatles); // ['John', 'Paul', 'George', 'Ringo']

// reduce with arrow function

let beatles2 = names.reduce((accumulator, beatle) => {
  accumulator.push(beatle.name);
    return accumulator;
}, []);
