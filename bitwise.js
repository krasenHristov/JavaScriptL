let logicalOr = 1 | 2;
console.log(logicalOr); // 3 because 1 is 01 and 2 is 10, so 01 | 10 = 11 = 3

let logicalAnd = 1 & 2;
console.log(logicalAnd); // 0 because 1 is 01 and 2 is 10, so 01 & 10 = 00 = 0

let logicalXor = 1 ^ 2;
console.log(logicalXor); // 3 because 1 is 01 and 2 is 10, so 01 ^ 10 = 11 = 3

let logicalNot = ~1;
console.log(logicalNot); // -2 because 1 is 01, so ~01 = 10 = -2

let leftShift = 1 << 2;
console.log(leftShift); // 4 because 1 is 01, so 01 << 2 = 0100 = 4

let rightShift = 1 >> 2;
console.log(rightShift); // 0 because 1 is 01, so 01 >> 2 = 00 = 0

let zeroFillRightShift = 1 >>> 2;
console.log(zeroFillRightShift); // 0 because 1 is 01, so 01 >>> 2 = 00 = 0

let leftShift2 = -1 << 4;
console.log(leftShift2); // -16 because -1 is 111 and 111 << 4 = 1110000 = -16

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;

myPermission = myPermission | readPermission | writePermission;
console.log(myPermission); // 6 because 110 | 100 | 010 = 110 = 6
