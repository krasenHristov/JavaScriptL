function getRandomeNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomeNumber(1, 10));

console.log(Math.PI); // 3.141592653589793
console.log(Math.random()); // rand number between 0 and 1
console.log(Math.floor(1.9)); // 1 - round down
console.log(Math.ceil(1.1)); // 2 - round up
console.log(Math.round(1.5)); // 2 - round to nearest integer
console.log(Math.pow(2, 3)); // 8 - 2 to the power of 3
console.log(Math.sqrt(9)); // 3 - square root
console.log(Math.abs(-10)); // 10 - absolute value
console.log(Math.sin(0)); // 0 - sine
console.log(Math.cos(0)); // 1 - cosine
console.log(Math.tan(0)); // 0 - tangent
console.log(Math.min(1, 2, 3)); // 1 - minimum value
console.log(Math.max(1, 2, 3)); // 3 - maximum value
console.log(Math.log(10)); // 2.302585092994046 - natural logarithm
console.log(Math.log10(10)); // 1 - base 10 logarithm
console.log(Math.log2(10)); // 3.321928094887362 - base 2 logarithm
console.log(Math.exp(1)); // 2.718281828459045 - exponential
console.log(Math.E); // 2.718281828459045 - Euler's number
console.log(Math.LN2); // 0.6931471805599453 - natural logarithm of 2
console.log(Math.LN10); // 2.302585092994046 - natural logarithm of 10
console.log(Math.LOG2E); // 1.4426950408889634 - base 2 logarithm of E
console.log(Math.LOG10E); // 0.4342944819032518 - base 10 logarithm of E
console.log(Math.SQRT1_2); // 0.7071067811865476 - square root of 1/2
console.log(Math.SQRT2); // 1.4142135623730951 - square root of 2
console.log(Math.sign(-10)); // -1 - sign of a number
console.log(Math.trunc(1.9)); // 1 - integer part of a number
console.log(Math.cbrt(8)); // 2 - cube root of a number
console.log(Math.hypot(3, 4)); // 5 - square root of the sum of squares
console.log(Math.clz32(1)); // 31 - number of leading zeros in a 32-bit binary representation
console.log(Math.imul(2, 3)); // 6 - 32-bit integer multiplication
console.log(Math.fround(1.337)); // 1.3370000123977661 - round to nearest 32-bit float
console.log(Math.expm1(1)); // 1.718281828459045 - exp(x) - 1
console.log(Math.log1p(1)); // 0.6931471805599453 - log(1 + x)
