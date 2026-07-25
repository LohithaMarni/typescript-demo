"use strict";
class Student {
    studentId;
    name;
    age;
    constructor(studentId, name, age) {
        this.studentId = studentId;
        this.name = name;
        this.age = age;
    }
    displayDetails() {
        console.log("Student ID:", this.studentId);
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}
let student1 = new Student(101, "John", 20);
student1.displayDetails();
