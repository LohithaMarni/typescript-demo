import { TAX_PERCENT, BOOKING_CHARGE } from "./Week4-1a.js";
import { Customer } from "./Week4-1b.js";

export class Reservation {

    constructor(
        public customer: Customer,
        private ticketAmount: number,
        public coachNumber: number
    ) {}

    // Calculate total amount
    public getTotalAmount(): number {
        const tax = this.ticketAmount * TAX_PERCENT;
        return this.ticketAmount + tax + BOOKING_CHARGE;
    }

    // Display reservation details
    public displayReservation(): void {
        console.log("------ Reservation Details ------");
        console.log(`Customer Name : ${this.customer.customerName}`);
        console.log(`Age           : ${this.customer.customerAge}`);
        console.log(`Seat Type     : ${this.customer.seatType}`);
        console.log(`Coach Number  : ${this.coachNumber}`);
        console.log(`Total Amount  : ${this.getTotalAmount()}`);
        console.log("---------------------------------");
    }
}