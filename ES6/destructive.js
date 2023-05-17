const expense = {
  type: 'Business',
  amount: '$45 USD',
  comment: 'Tacos for the team',
  company: 'Acme'
};


// ES5
/* 
let type = expense.type;
let amount = expense.amount;
let comment = expense.comment;
let company = expense.company;
*/


// ES6
const { type, amount, comment, company } = expense;

console.log(type); // Business
console.log(amount); // $45 USD
console.log(comment); // Tacos for the team
console.log(company); // Acme
console.log();
console.log();


const savedFile = {
  extension: 'jpg',
  name: 'repost',
  size: 14040,
};

function fileSummary(file, location) {
  return `The file ${file.name}.${file.extension} is of size ${file.size} and location is ${location}`;
};

console.log("ES5");
console.log(fileSummary(savedFile, 'home/usr/pics/repost.jpg')); // The file repost.jpg is of size 14040

// ES6
function fileSummary2({ name, extension, size }, { filepath }) {
  return `The file ${name}.${extension} is of size ${size} and location is ${filepath}`;
};

console.log("ES6");
console.log(fileSummary2(savedFile , {filepath: 'home/usr/pics/repost.jpg'}));
// The file repost.jpg is of size 14040 and location is home/usr/pics/repost.jpg
