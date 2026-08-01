function getLastElement<T>(items: T[]): T {
    return items[items.length - 1];
}


function packageItem<T>(item: T): { product: T; packedOn: Date } {
    return {
        product: item,
        packedOn: new Date()
    };
}


const fruits = ["Apple", "Banana", "Orange"];
const lastFruit = getLastElement<string>(fruits);
console.log(`Last Fruit: ${lastFruit.toUpperCase()}`);

const marks = [75, 88, 95];
const lastMark = getLastElement<number>(marks);
console.log(`Last Mark: ${lastMark}`);

interface Book {
    title: string;
    author: string;
}

const myBook: Book = {
    title: "Wings of Fire",
    author: "A.P.J. Abdul Kalam"
};

const packedBook = packageItem<Book>(myBook);

console.log(`Book: ${packedBook.product.title}`);
console.log(`Packed On: ${packedBook.packedOn}`);