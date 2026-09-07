"use strict";
let studentName = "Rahul";
let studentAge = 20;
let isPresent = true;
console.log("Data type of studentName is --> " + typeof studentName);
console.log("Data type of studentAge is --> " + typeof studentAge);
console.log("Data type of isPresent is --> " + typeof isPresent);
function displayStudent(name, age, present) {
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Status: " + (present ? "Present" : "Absent"));
}
displayStudent(studentName, studentAge, isPresent);
