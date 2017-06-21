export class Fraction {
    numerator: number;
    denominator: number = 1;
    constructor(numerator: number, denominator?: number) {
        this.numerator = numerator;
        this.denominator = denominator;
    }

    plus(that: Fraction): Fraction {
        return new Fraction(this.numerator + that.numerator, this.denominator);
    }
    intValue(): number {
       return this.numerator;
    }
    getNumerator(): number {
        return this.numerator;
    }
    getDenominator(): number {
        return this.denominator;
    }
    equals(other: Object): boolean {
        if (other instanceof Fraction) {
            let that: Fraction = other;
            return this.numerator === that.numerator && this.denominator === that.denominator;
        }
        return false;
    }

}