import { NumberTheory } from "./NumberTheory";

export class Fraction {
    numerator: number;
    denominator: number = 1;
    constructor(numerator: number, denominator?: number) {
        this.numerator = numerator / gcd;
        if (denominator) {
            this.denominator = denominator / gcd;
        }
    }

    plus(that: Fraction): Fraction {
        if (this.denominator !== that.denominator) {
            return new Fraction(this.numerator * that.denominator + that.numerator * this.denominator, this.denominator * that.denominator);
        }
        else {
            return new Fraction(this.numerator + that.numerator, this.denominator);
        }
    }
}