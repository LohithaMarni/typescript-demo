"use strict";
const numbers = [12, 35, 1, 10, 34, 35, 5];
let largest = -Infinity;
let secondLargest = -Infinity;
for (const num of numbers) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    }
    else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }
}
if (secondLargest === -Infinity) {
    console.log("There is no second largest number.");
}
else {
    console.log("Second Largest Number:", secondLargest);
}
