// balanced expression
// meaning that for every opening bracket there is a closing bracket
// and for every closing bracket there is an opening bracket
// "()" is balanced
// "([])" is balanced
// "([]{}())" is balanced
// "([)]" is not balanced
const balanced = "[][][][][]" // balanced
const notBalanced = "[[[[]]]]]]]" // not balanced

// Write a function that takes a string and returns true if the string is balanced
// and false if it is not balanced

// ES5 with for loop and includes method
function isBalancedFor(str) {
  let open = ["(", "[", "{"];
  let close = [")", "]", "}"];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (open.includes(str[i])) {
      count++;
    }else if(close.includes(str[i])) {
      count--;
    }};
  if (count < 0 || count > 0) {
    return false;
} else {
    return true;
}};

console.log("for loop balanced", isBalancedFor(balanced));
console.log("for loop not ballanced", isBalancedFor(notBalanced));

// ES6 with reduce
// 0 is the initial value of PrevChar(accumulator)
function isBalancedRed(str) {
  return !str.split("").reduce((PrevChar, thisChar) => {
    if (thisChar === "(" || thisChar === "[" || thisChar === "{") {
      return ++PrevChar;
    };
    if (thisChar === ")" || thisChar === "]" || thisChar === "}") {
      return --PrevChar;
    };
    return PrevChar;
  }, 0)};

console.log("reduce balanced", isBalancedRed(balanced));
console.log("reduce not balanced", isBalancedRed(notBalanced));

// with arrow function
// 0 is the initial value of PrevChar(accumulator)
const isBalancedArr = (str) => {
  return !str.split("").reduce((PrevChar, thisChar) => {
    if (thisChar === "(" || thisChar === "[" || thisChar === "{") {
      return ++PrevChar;
    };
    if (thisChar === ")" || thisChar === "]" || thisChar === "}") {
      return --PrevChar;
    };
    return PrevChar;
  }, 0)}

console.log("red arrow balanced", isBalancedArr(balanced));
console.log("red arrow not balanced", isBalancedArr(notBalanced));
