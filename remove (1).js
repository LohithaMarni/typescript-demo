"use strict";
const str = "programming";
const result = [...new Set(str)].join("");
console.log("Original String:", str);
console.log("After Removing Duplicates:", result);
