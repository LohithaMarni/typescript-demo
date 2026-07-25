// 1. Traditional Named Function
function calculateFinalAmount(amount: number, discount: number): number {
    return amount - (amount * discount);
}

// 2. Arrow Function
const calculateFinalAmountArrow = (amount: number, discount: number): number => {
    return amount - (amount * discount);
};

// 3. Shorthand Arrow Function
const getShopMessage = (shop: string): string =>
    `Welcome to ${shop}!`;

const productPrice: number = 1000;
const discountRate: number = 0.20; // 20% Discount

console.log(getShopMessage("Reliance Trends"));

// Using the traditional method
const finalPrice1 = calculateFinalAmount(productPrice, discountRate);
console.log(`Final Price (Traditional): ₹${finalPrice1}`);

// Using the arrow function method
const finalPrice2 = calculateFinalAmountArrow(productPrice, discountRate);
console.log(`Final Price (Arrow): ₹${finalPrice2}`);
