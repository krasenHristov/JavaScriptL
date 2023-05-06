const cicle = {
  radius: 1,
  draw() {
    console.log('draw');
  }
};

const another = {};

// this is not a good way to clone an object
// because it is not dynamic
for (let key in cicle) {
  another[key] = cicle[key];
}

// this is a better way to clone an object
// because it is dynamic and it can be used for any object
const anotherOne = Object.assign({
  color: 'yellow',
}, cicle);

console.log(anotherOne);

// this is the best way to clone an object
// because it is dynamic and it can be used for any object 
// and it is more readable and easier to understand
const anotherTwo = { ...cicle };
console.log(anotherTwo);

// to add a new property to an object we can do this
anotherTwo.color = 'yellow';
console.log(anotherTwo);

// to delete a property from an object we can do this
delete anotherTwo.color;

// to iterate over the properties of an object we can do this
for (let key in anotherTwo) {
  console.log(key, anotherTwo[key]);
}
