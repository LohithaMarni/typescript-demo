"use strict";
class Student {
    name;
    rollNumber;
    static collegeName = "ABC Engineering College";
    constructor(name, rollNumber) {
        this.name = name;
        this.rollNumber = rollNumber;
    }
    static displayCollegeName() {
        console.log("College Name:", Student.collegeName);
    }
    displayStudentDetails() {
        console.log("Student Name:", this.name);
        console.log("Roll Number:", this.rollNumber);
    }
}
let student1 = new Student("John", 101);
let student2 = new Student("Alice", 102);
Student.displayCollegeName();
student1.displayStudentDetails();
student2.displayStudentDetails();
