"use strict";
const num = 12345;
let number = Math.abs(num); // Handles negative numbers
let sum = 0;
while (number > 0) {
    const digit = number % 10;
    sum += digit;
    number = Math.floor(number / 10);
}
console.log("Sum of digits:", sum);
