// ES5
function getMessage() {
  const year = new Date().getFullYear();
  return "The year is" + year;
}

console.log(getMessage());


// ES6 template strings
function getMessage2() {
  const year = new Date().getFullYear();
	return `The year is 
${year + 1}
the future is now`;
}

console.log(getMessage2());


// practical example
const device_id = 4;
const guid = 20;
const username = "hello";

const data = `{"device_id": "${device_id}", "guid": "${guid}", "username": "${username}"}`;

console.log(data)
