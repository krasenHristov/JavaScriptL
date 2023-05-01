let isBanger = true;
let neverDied = false;

let isBoo = isBanger && neverDied;
console.log("is he a banger", isBoo);
let isIt = !isBoo;
console.log("he is not a banger", isIt);

console.log(`
	----------
	----------
`);

// console log in red color
console.log("\x1b[31m", "only one true means true", "\x1b[0m");
let isBoo2 = isBanger || neverDied;
console.log("is he a banger", isBoo2);

console.log(`
	----------
	----------
`);

// logical with non boolean
let pickClass = undefined;
let pickGender = "male";
let defaultClass = undefined;

if (pickGender === "male") {
	defaultClass = "warrior";
}
else if (pickGender === "female") {
	defaultClass = "mage";
} else {
	defaultClass = "healer";
}


let compare = pickClass || defaultClass;
console.log("your class", compare);
