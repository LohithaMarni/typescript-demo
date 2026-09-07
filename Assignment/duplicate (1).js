"use strict";
let numbers = [1, 2, 3, 4, 2, 5, 1, 6, 3];
let duplicates = [];
let seen = new Set();
for (let num of numbers) {
    if (seen.has(num)) {
        duplicates.push(num);
    }
    else {
        seen.add(num);
    }
}
console.log("Original Array:", numbers);
console.log("Duplicate Elements:", [...new Set(duplicates)]);
