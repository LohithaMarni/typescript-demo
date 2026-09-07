"use strict";
let num = 145;
let temp = num;
let sum = 0;
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++)
        fact *= i;
    return fact;
}
while (temp > 0) {
    let digit = temp % 10;
    sum += factorial(digit);
    temp = Math.floor(temp / 10);
}
if (sum === num)
    console.log(num + " is Strong");
else
    console.log(num + " is Not Strong");
