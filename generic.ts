class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    display(): void {
        console.log("Value:", this.value);
    }
}

// String Box
let stringBox = new Box<string>("Hello, TypeScript!");
stringBox.display();

// Number Box
let numberBox = new Box<number>(100);
numberBox.display();

// Boolean Box
let booleanBox = new Box<boolean>(true);
booleanBox.display();