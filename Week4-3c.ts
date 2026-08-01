interface Details {
    size: number;
}

function displaySize<T extends Details>(item: T): number {
    return item.size;
}

console.log(displaySize({ size: 12 }));
console.log(displaySize({ size: 30 }));