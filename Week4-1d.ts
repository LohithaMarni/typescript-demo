import { Reservation } from "./Week4-1c.js";
import { Customer } from "./Week4-1b.js";

const person: Customer = {
    customerName: "Rahul Sharma",
    customerAge: 30,
    seatType: "Window"
};

const booking = new Reservation(person, 1500, 7);

booking.displayReservation();