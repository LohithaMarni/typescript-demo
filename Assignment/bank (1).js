"use strict";
class BankAccount {
    accountHolder;
    balance;
    constructor(accountHolder, initialBalance) {
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited: £${amount}`);
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn: £${amount}`);
        }
        else {
            console.log("Insufficient balance!");
        }
    }
    displayBalance() {
        console.log("Account Holder:", this.accountHolder);
        console.log(`Current Balance: £${this.balance}`);
    }
}
let account1 = new BankAccount("John Smith", 1000);
account1.deposit(500);
account1.withdraw(300);
account1.displayBalance();
