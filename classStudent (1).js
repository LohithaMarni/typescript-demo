"use strict";
class Student {
    name;
    age;
    rollNumber;
    course;
    constructor(name, age, rollNumber, course) {
        this.name = name;
        this.age = age;
        this.rollNumber = rollNumber;
        this.course = course;
    }
    displayDetails() {
        console.log("Student Details:");
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Roll Number:", this.rollNumber);
        console.log("Course:", this.course);
    }
}
let student1 = new Student("John", 20, 101, "Computer Science");
student1.displayDetails();
