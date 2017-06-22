import {Fraction} from "../src/AddFractions";

describe("AddFractionsTest", () => {

    it("zero plus zero", () => {
        expect(new Fraction(0).plus(new Fraction(0))).toEqual(new Fraction(0));
    });
    it("non-zero plus zero", () => {
        expect(new Fraction(3).plus(new Fraction(0))).toEqual(new Fraction(3));
    });
    it("zero plus non-zero", () => {
        expect(new Fraction(0).plus(new Fraction(5))).toEqual(new Fraction(5));
    });
    it("non-negative, non-zero operands ", () => {
        expect(new Fraction(3).plus(new Fraction(4))).toEqual(new Fraction(7));
    });
    it("negative inputs and negative outputs", () => {
        expect(new Fraction(-3).plus(new Fraction(1))).toEqual(new Fraction(-2));
    });
    it("non-trivial denominator of the same value", () => {
        expect(new Fraction(3, 5)).toEqual(new Fraction(1, 5).plus(new Fraction(2, 5)));
    });
    it("different denominators without reducing result", () => {
        expect(new Fraction(1, 2).plus(new Fraction(1, 3))).toEqual(new Fraction(5, 6));
    });
});