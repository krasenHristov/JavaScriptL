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

function isBalanced(str) {
  let open = ["(", "[", "{"];
  let close = [")", "]", "}"];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (open.includes(str[i])) {
      console.log(str[i]);
      count++;
    }else if(close.includes(str[i])) {
      console.log(str[i]);
      count--;
    }};
  if (count < 0 || count > 0) {
    console.log(count);
    return false;
} else {
    console.log(count);
    return true;
}};

console.log(isBalanced(balanced));
console.log(isBalanced(notBalanced));

