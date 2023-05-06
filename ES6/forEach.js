const list_of_names = ['John', 'Mary', 'Joe', 'Jane'];

// for (let i = 0; i < list_of_names.length; i++)
// same as above
// forEach is better for readability and less prone to errors (e.g. infinite loop)



// function(name) is a callback function 
list_of_names.forEach((function(name)  {
//  console.log(name); // John, Mary, Joe, Jane
}));

// same as above but with arrow function syntax
// arrow function syntax is better for readability
list_of_names.forEach((name) => {
//  console.log(name); // John, Mary, Joe, Jane
});

const list_of_numbers = [1, 2, 3, 4, 5];

let sum = 0;

function adder(numbers) {
  numbers.forEach((number) => {
    sum += number;
});
  return sum;
}

console.log(adder(list_of_numbers)); // 15
