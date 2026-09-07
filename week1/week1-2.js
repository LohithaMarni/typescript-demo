"use strict";
let dataValue = 50;
dataValue = "Welcome to TypeScript";
dataValue = false;
// 2. Using the 'unknown' type
let inputData = "Hello Student";
if (typeof inputData === "string") {
    console.log("Length of input string: " + inputData.length);
}
// 3. Using the 'void' type
function showMessage(text) {
    console.log("MESSAGE: " + text);
}
showMessage("Project Completed Successfully!");
