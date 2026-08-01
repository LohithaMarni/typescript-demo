
namespace CitizenRecords {

    const voterIdLength = 10;

    export function verifyVoterId(id: string): boolean {
        const isNumber = /^[0-9]+$/.test(id);
        return isNumber && id.length === voterIdLength;
    }

    export function verifyPassport(passport: string): boolean {
        const passportPattern = /^[A-Z][0-9]{7}$/;
        return passportPattern.test(passport.toUpperCase());
    }

    export namespace Charges {

        export function calculateServiceCharge(amount: number): number {
            return amount * 0.15;
        }

    }
}

const voter = "1234567890";
const passport = "A1234567";

console.log(`Voter ID Valid: ${CitizenRecords.verifyVoterId(voter)}`);
console.log(`Passport Valid: ${CitizenRecords.verifyPassport(passport)}`);

const payment = 2000;
const charge = CitizenRecords.Charges.calculateServiceCharge(payment);

console.log(`Service Charge on ₹${payment} is ₹${charge}`);

