"use strict";
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
    display() {
        console.log("Value:", this.value);
    }
}
// String Box
let stringBox = new Box("Hello, TypeScript!");
stringBox.display();
// Number Box
let numberBox = new Box(100);
numberBox.display();
// Boolean Box
let booleanBox = new Box(true);
booleanBox.display();
