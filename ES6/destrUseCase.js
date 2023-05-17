function signUp(username, passowrd, email, dateOfBirth, city) {
  // creates a new user
}

signUp("goosie", "password1234", "email@gg.com", "02/09/2057", "Varna");

/////////////
// Versus //
////////////

function signUp2 ({username, passowrd, email, dateOfBirth, city }) {
  // creates a new user
};

const user = {
  username: "goosie",
  passowrd: "password1234",
  email: "email@gg.com",
  dateOfBirth: "02/09/2057",
  city: "Varna",
};

signUp2(user);


const moves = [
  [4, 5],
  [5, 1],
  [6, 7],
];

const movez = moves.map(([ x,y ]) => {
  return { x, y };
});

console.log(movez); // [ { x: 4, y: 5 }, { x: 5, y: 1 }, { x: 6, y: 7 } ]
