"use strict";
class Employee {
    name;
    salary;
    department;
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    displaySalary() {
        console.log("Salary:", this.salary);
    }
}
class Manager extends Employee {
    displayDepartment() {
        console.log("Department:", this.department);
    }
}
let emp = new Employee("Alice", 50000, "IT");
console.log("Employee Name:", emp.name);
emp.displaySalary();
let manager = new Manager("Bob", 70000, "HR");
console.log("Manager Name:", manager.name);
manager.displayDepartment();
