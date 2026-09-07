export interface Customer {
    customerName: string;
    customerAge: number;
    seatType?: "Window" | "Middle" | "Aisle";
}