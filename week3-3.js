"use strict";
class BankBranch {
    static bankTitle = "SBI Bank";
    static totalCustomers = 0;
    customerId;
    customerName;
    constructor(name, id) {
        this.customerName = name;
        this.customerId = id;
        BankBranch.totalCustomers++;
    }
    static getBankPolicy() {
        console.log(`Welcome to ${this.bankTitle}. Follow all banking rules.`);
    }
    showCustomer() {
        console.log(`Customer: ${this.customerName}`);
        console.log(`Customer ID: ${this.customerId}`);
    }
}
console.log(BankBranch.bankTitle);
BankBranch.getBankPolicy();
const customer1 = new BankBranch("Rahul Kumar", "SBI1001");
const customer2 = new BankBranch("Anjali Sharma", "SBI1002");
customer1.showCustomer();
console.log(customer1.customerId);
console.log(`Total Customers: ${BankBranch.totalCustomers}`);
