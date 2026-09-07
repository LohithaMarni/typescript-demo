"use strict";
// 1. Parameter & Return Types
function sayHello(studentName) {
    return `Hello, ${studentName}!`;
}
// 2. Default Parameters
function getDepartment(department = "CSE") {
    return `Department: ${department}`;
}
// 3. Optional Parameters
function sendNotification(studentId, note) {
    console.log(`Sending notification to Student ID: ${studentId}`);
    if (note) {
        console.log(`Note: ${note}`);
    }
}
// 4. REST Parameters
function calculateAverage(...marks) {
    return marks.reduce((sum, mark) => sum + mark, 0) / marks.length;
}
console.log(sayHello("thulasi"));
console.log(getDepartment());
console.log(getDepartment("AI & DS"));
sendNotification(101);
sendNotification(101, "Project submission tomorrow");
const averageMarks = calculateAverage(85, 90, 88, 92);
console.log(`Average Marks: ${averageMarks}`);
