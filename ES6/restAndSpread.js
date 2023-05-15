// Rest operator
function sumOfArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumOfArray([1, 2, 3, 4, 5])); // 15



// the rest operator is used to pass an indefinite number of arguments to a function
// meaning that you can pass any number of arguments to a function
// and it will be treated as an array inside that function
// like kwargs and args in python
function sumOfArray2(...arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumOfArray2(1, 2, 3, 4, 5)); // 15

// Spread operator
// the spread operator is used to spread an array into individual elements
// so that you can pass an array to a function that expects individual elements
// like *args in python

function sumOfArray3(a, b, c, d, e) {
  return a + b + c + d + e;
}

const arr = [1, 2, 3, 4, 5];
console.log(sumOfArray3(...arr)); // 15

// can also use the spread operator to copy an array
// this is because the spread operator spreads an array into individual elements
// and then you can use the spread operator to spread those individual 
// elements into an array
// so you can use the spread operator to copy an array
// like the slice method in python
const arr2 = [...arr];
console.log(arr2); // [1, 2, 3, 4, 5]

// can also use the spread operator to concatenate arrays
// like the extend method in python
const arr3 = [6, 7, 8, 9, 10];
const arr4 = [...arr2, ...arr3];
console.log(arr4); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// can also use the spread operator to spread an array into individual elements
// and then use the spread operator to spread those individual elements into an object
// like the **kwargs in python

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
};

const obj2 = {
  ...obj
};

console.log(obj2); // {a: 1, b: 2, c: 3, d: 4, e: 5}


// practical example

const MathLibrary = {
  calculateProduct(...rest) {
    console.log('Please use the multiply method instead');
    return this.multiply(...rest);
    },
  multiply(a, b) {
    return a * b;
    },
};

console.log(MathLibrary.calculateProduct(2, 3)); // 6
console.log(MathLibrary.multiply(2, 3)); // 6
