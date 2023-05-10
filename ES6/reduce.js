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


const desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

const deskTypes = desks.reduce(function(obj, desk) {
  if (desk.type === 'sitting') {
    obj.sitting++;
  }
  if (desk.type === 'standing') {
    obj.standing++;
  }
  return obj;
  }, { sitting:0, standing:0});

console.log(deskTypes); // { sitting: 3, standing: 2 }


const numbers2 = [1, 1, 2, 3, 4, 4];

// [] is the initial value of the accumulator (an empty array)
// if the number is not in the array, push it to the array
// if the number is in the array, don't push it to the array
// the -1 is the index of the number in the array if it is in the array 
// if the number is not in the array, the index is will be -1
function unique(array) {
  return array.reduce(function (newArray, number) {
    if (newArray.indexOf(number) === -1) {
      newArray.push(number);
    }
    return newArray;
  }, []);
}

console.log(unique(numbers2)); // [1, 2, 3, 4]

// with reduce and find
function unique2(array) {
  return array.reduce(function (newArray, number) {
    if (!newArray.find(function (newNumber) {
      return newNumber === number;
    })) {
      newArray.push(number);
    }
    return newArray;
  }, []);
}

console.log(unique2(numbers2)); // [1, 2, 3, 4]
