const names = [
  'Alexandria',
  'Vaska',
  'Vanya',
  'Vladimir',
  'John',
  'Samanta'
];

let everyNameLength = names.every(function(name) {
  return name.length > 4;
});

console.log(everyNameLength); // false

let someNameLength = names.some(function(name) {
  return name.length > 4;
});

console.log(someNameLength); // true

// arrow function
let everyNameLengthArrow = names.every(name => name.length > 4);
console.log(everyNameLengthArrow); // false

let someNameLengthArrow = names.some(name => name.length > 4);
console.log(someNameLengthArrow); // true


function Field(value) {
  this.value = value;
}

// prototypes are used to add methods to objects
Field.prototype.validate = function() {
  return this.value.length > 0;
}

let username = new Field('Krasyo');
let password = new Field('12345');
let birthdate = new Field('10/10/2010');

let fields = [username, password, birthdate];

let formIsValid = fields.every(function(field) {
  return field.validate();
});

if (formIsValid) {
  // allow user to submit
  console.log('Allow user to submit');
}
else {
  // show an error message
  console.log('Form is not valid');
}
