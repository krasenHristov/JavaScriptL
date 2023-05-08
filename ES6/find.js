var users = [
  { name: 'Jill', id: 1, age: 32 },
  { name: 'Alexsus', id: 2, age: 20 },
  { name: 'Bill', id: 3, age: 40 },
  { name: 'Sam', id: 4, age: 25 },
  { name: 'Alexa', id: 5, age: 30 },
];

var user;


// ES5 way
for (var i = 0; i < users.length; i++) {
  if (users[i].name === 'Bill') {
    user = users[i];
  }
}

console.log(user)

var target = "Alex";
// ES6 way
let user1 = users.find(function(user) {
  return user.name === target;
});

if(user1) {
  console.log(user1)
} else {
  console.log("Your search for " + target + " did not match any records")
}

// ES6 way
var target2 = "Alexsussa";
let user2 = users.find((user) => {
  return user.name === target2;
});

if(user2) {
  console.log(user2)
} else {
  console.log("Your search for " + target2 + " did not match any records")
}


/////////////////////////////

var posts = [
  { id: 1, title: 'New Post' },
  { id: 2, title: 'Old Post' }
];

var comment = { postId: 1, content: 'Great Post' };

function postForComment(posts, comment) {
  return posts.find(function(post){
    return post.id === comment.postId;
  });
}


