const computers = [
  { brand: 'Apple', ram: 24 },
  { brand: 'Compaq', ram: 4 },
  { brand: 'Acer', ram: 32 },
  { brand: 'Asus', ram: 16 },
  { brand: 'Lenovo', ram: 8 },
  { brand: 'HP', ram: 4 },
];

// ES5

for (let i = 0; i < computers.length; i++) {
  let computer = computers[i];
  if (computer.ram < 16) {
    var allComputersCanRunProgram = false;
	} else {
    var onlySomeComputersCanRunProgram = true;
	}
};

console.log("all computers can run it", allComputersCanRunProgram); // false
console.log("some computers can run it", onlySomeComputersCanRunProgram); // true


// ES6

let allComputersCanRunProgram1 = computers.every(
  computer => computer.ram > 16);

let onlySomeComputersCanRunProgram1 = computers.some(computer => computer.ram > 16);

console.log("all computers can run it", allComputersCanRunProgram1); // false
console.log("some computers can run it", onlySomeComputersCanRunProgram1); // true

// Example 2 no arrow function

let allComputersCanRunProgram2 = computers.every(function(computer) {
  return computer.ram > 16;
});

let onlySomeComputersCanRunProgram2 = computers.some(function(computer) {
  return computer.ram > 16;
});

console.log("all computers can run it", allComputersCanRunProgram2); // false
console.log("some computers can run it", onlySomeComputersCanRunProgram2); // true
