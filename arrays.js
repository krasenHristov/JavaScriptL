let list_of_numbers = [1, 2, 3, 4, 5];

console.log(list_of_numbers[0]); // 1
console.log(list_of_numbers[1]); // 2

list_of_numbers[5] = 6;
console.log(list_of_numbers); // [ 1, 2, 3, 4, 5, 6 ]

list_of_numbers.pop();
console.log(list_of_numbers); // [ 1, 2, 3, 4, 5 ]

list_of_numbers.push(6);
console.log(list_of_numbers); // [ 1, 2, 3, 4, 5, 6 ]

// .shift() is like popleft() in Python
list_of_numbers.shift();
console.log(list_of_numbers); // [ 2, 3, 4, 5, 6 ]

// .unshift() is like appendleft() in Python
list_of_numbers.unshift(1);
console.log(list_of_numbers); // [ 1, 2, 3, 4, 5, 6 ]

// .splice() is like slicing in Python
console.log(list_of_numbers.slice(0, 2)); // [ 1, 2 ]

// .map() is like list comprehension in Python
// it returns a new array with the results of calling a function for every array element
// it does not change the original array
list_of_numbers.map((number) => {
	number += 1;
	console.log(number);
}
);

// .forEach() is like a for loop in Python but it does not return anything
// it does not change the original array either
list_of_numbers.forEach((number) => {
	number += 1;
	console.log(number);
}
);
console.log(list_of_numbers); // [ 1, 2, 3, 4, 5, 6 ]

// to change the original array and return a new array
let new_list_of_numbers = list_of_numbers.map((number) => {
	number += 1;
	return number;
}
);

console.log(new_list_of_numbers); // [ 2, 3, 4, 5, 6, 7 ]
