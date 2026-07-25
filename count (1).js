"use strict";
const str = "programming";
const frequency = {};
for (const char of str) {
    if (frequency[char]) {
        frequency[char]++;
    }
    else {
        frequency[char] = 1;
    }
}
console.log("Character Frequencies:");
for (const char in frequency) {
    console.log(`${char}: ${frequency[char]}`);
}
