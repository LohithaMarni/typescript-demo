"use strict";
let numbers = [1, 2, 3, 5, 6];
let n = numbers.length + 1;
let expectedSum = (n * (n + 1)) / 2;
let actualSum = numbers.reduce((sum, num) => sum + num, 0);
let missingNumber = expectedSum - actualSum;
console.log("Array:", numbers);
console.log("Missing Number:", missingNumber);
