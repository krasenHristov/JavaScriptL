function makeAjaxRequest(url, method = 'GET') {
  //if (!method) {
  //  method = 'GET'
  //  }

  return method
}

console.log(makeAjaxRequest('google.com')); // GET
console.log(makeAjaxRequest('google.com', 'POST')); // POST
console.log(makeAjaxRequest('google.com', null)); // null
console.log(makeAjaxRequest('google.com', undefined)); // GET


function User(id) {
  this.id = id;
}

function generateId() {
  return Math.floor(Math.random() * 9999)
}

function createAdminUser(user = new User(generateId())) {
  user.admin = true;

  return user;
}

const user = new User(generateId());
console.log(user); // User { id: 1234 }
createAdminUser(user);
console.log(user); // User { id: 1234, admin: true }
console.log(createAdminUser()); // User { id: 1234, admin: true }
