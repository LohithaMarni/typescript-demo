"use strict";
let numbers = [1, 2, 3, 2, 4, 1, 5, 3, 2];
let count = {};
for (let num of numbers) {
    if (count[num]) {
        count[num]++;
    }
    else {
        count[num] = 1;
    }
}
console.log("Array:", numbers);
console.log("Occurrences:", count);
