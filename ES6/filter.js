var products = [
  { name: "banana", type: "fruit" },
  { name: "carrot", type: "vegetable" },
  { name: "apple", type: "fruit" },
  { name: "strawberry", type: "fruit" },
  { name: "tomato", type: "vegetable" }
];

var filteredProducts = [];

// ES5 for loop
for (var i = 0; i < products.length; i++) {
  if (products[i].type === "fruit") {
		filteredProducts.push(products[i]);
	}
}

console.log(filteredProducts);

// ES6 filter
// filter is a higher order function that takes a function as an argument
// the difference between filter and for loop is that filter returns a new array
// and for loop does not return anything but pushes to an array that is 
// declared outside of the loop

const filteredProductsMap = products.filter(function(product) {
  return product.type === "fruit";
});

console.log(filteredProductsMap);

// ES6 filter with arrow function
const filteredProductsArrow = products.filter(product => product.type === "fruit");

console.log(filteredProductsArrow);

/////////////////////////////
var products2 = [
  { name: "banana", type: "fruit", quantity: 0, price: 1 },
  { name: "carrot", type: "vegetable", quantity: 10, price: 15 },
  { name: "apple", type: "fruit", quantity: 30, price: 9 },
  { name: "strawberry", type: "fruit", quantity: 3, price: 5 },
  { name: "tomato", type: "vegetable", quantity: 5, price: 7 }
];

// in stock, less than $10, can also filter by type
let filteredProducts2 = products2.filter(function(product) {
  return product.quantity > 0 && product.price < 10;
});

console.log(filteredProducts2);

// ES6 filter with arrow function
let filteredProducts2Arrow = products2.filter(product => 
  product.quantity > 0 
  && product.price < 10);

console.log(filteredProducts2Arrow);


/////////////////////////////
var posts = { id: 4, title: "New Post" };
var comments = [
  { postId: 4, content: "awesome post" },
  { postId: 3, content: "it was ok" },
  { postId: 4, content: "neat" },
  { postId: 3, content: "not bad" },
  { postId: 4, content: "great" },
  { postId: 2, content: "nice" },
  { postId: 4, content: "cool" }
];

function getCommentsForPost(post, comments_list) {
	return comments_list.filter(function(comment) {
		return comment.postId === post.id;
	});
}

let commentsForPost = getCommentsForPost(posts, comments);

console.log(commentsForPost);

// ES6 filter with arrow function
let commentsForPostArrow = comments.filter(comment =>
  comment.postId === posts.id);

console.log(commentsForPostArrow);
