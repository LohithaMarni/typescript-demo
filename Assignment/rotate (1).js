"use strict";
let array = [1, 2, 3, 4, 5];
let n = 2;
function rotateArray(arr, positions) {
    let length = arr.length;
    positions = positions % length;
    return [...arr.slice(-positions), ...arr.slice(0, length - positions)];
}
let rotatedArray = rotateArray(array, n);
console.log("Original Array:", array);
console.log("Rotated Array:", rotatedArray);
