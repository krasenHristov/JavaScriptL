let name = "John";
let age = 25;

let user = {
	name: name,
	age: age
};

let user2 = {
	name: "Johny",
	age: 102
};
console.log(user.name); // John

console.log(user2.name); // Johny
console.log(user2["name"]); // Johny
console.log(user2); // { name: 'Johny', age: 102 }


let obj = {
	new_obj: {
		name: "John",
}}

console.log(obj.new_obj.name); // John
