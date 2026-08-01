
class StorageBox<T> {


    private value: T;

    constructor(data: T) {
        this.value = data;
    }

    
    public fetchValue(): T {
        console.log("Reading data...");
        return this.value;
    }

    public updateValue(newData: T): void {
        this.value = newData;
        console.log("Data updated successfully.");
    }
}


const moneyBox = new StorageBox<number>(8000);
let balance = moneyBox.fetchValue();
console.log(`Balance: ₹${balance}`);

const fileBox = new StorageBox<string>("College Certificate");
console.log(`Stored File: ${fileBox.fetchValue()}`);


interface Laptop {
    brand: string;
    ram: number;
}

const laptopBox = new StorageBox<Laptop>({
    brand: "Dell",
    ram: 16
});

const myLaptop = laptopBox.fetchValue();
console.log(`Laptop Brand: ${myLaptop.brand}`);
console.log(`RAM: ${myLaptop.ram} GB`);

