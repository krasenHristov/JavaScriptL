// resolve and reject are functions that are passed to the Promise constructor
// resolve and reject are not defined in the Promise constructor
// resolve and reject are passed to the Promise constructor by the JavaScript engine
let promise = new Promise((resolve, reject) => {
  let done = false;
  if (done) {
    resolve("Promise resolved");
  } else {
    reject("Promise rejected");
    }
});

console.log(promise);

promise
  // .then() can be chained to handle both resolved and rejected promises
  // .then() can be chained to handle multiple resolved and rejected promises
  .then(() => console.log("Promise RESOLVED"))
  .then(() => console.log("Promise REJECTED"))

  // .catch() is called when the promise is rejected to handle the error
  // .catch() is optional and can be omitted if the promise is not rejected
  .catch(() => console.log("Promise CATCH"));
