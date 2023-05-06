const message = "This is some random message";

// 1. Get the length of the string
console.log(message.length); // 28

// 2. Get the index of a character
console.log(message.indexOf("s")); // 3

// 3. Get the character at a specific index
console.log(message.charAt(2)); // i

// 4. Get the last character of a string
console.log(message.charAt(message.length - 1)); // e

// 5. Get a substring from a string
console.log(message.substring(0, 4)); // This

// 6. Get a substring from a string
console.log(message.slice(0, 4)); // This

// 7. Get a substring from a string
console.log(message.slice(-7)); // message

// 8. Get a substring from a string
console.log(message.slice(7)); // some random message

// 9. Get a substring from a string
console.log(message.slice(7, -7)); // some random

// 10. Replace a string with another string
console.log(message.replace("some", "another")); // This is another random message

// 11. Replace all occurrences of a string with another string
console.log(message.replace(/s/g, "x")); // Thix ix xome random mexxage

// 12. Convert a string to uppercase
console.log(message.toUpperCase()); // THIS IS SOME RANDOM MESSAGE

// 13. Convert a string to lowercase
console.log(message.toLowerCase()); // this is some random message

// 14. Check if a string starts with a specific character
console.log(message.startsWith("T")); // true

// 15. Check if a string ends with a specific character
console.log(message.endsWith("e")); // true

// 16. Check if a string includes a specific character
console.log(message.includes("some")); // true

// 17. Check if a string includes a specific character
// The second parameter is the starting index
console.log(message.includes("some", 10)); // false

// 18. Split a string into an array
// splits the string into an array of substrings based on the separator
console.log(message.split(" ")); // [ 'This', 'is', 'some', 'random', 'message' ]

// 19. Split a string into an array
// The second parameter is the limit of the array length
console.log(message.split("")); // [ 'T','h','i','s',' ','i','s',' ','s','o','m','e',' ','r','a','n','d','o','m',' ','m','e','s','s','a','g','e' ]

// 20. Split a string into an array
// The second parameter is the limit of the array length
console.log(message.split(" ", 3)); // [ 'This', 'is', 'some' ]

// 21. Trim a string
// Removes whitespace from both ends of a string
const message2 = "   This is some random message   ";
console.log(message2.trim()); // This is some random message
