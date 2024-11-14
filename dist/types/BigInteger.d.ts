export default class BigInteger {
    private value;
    static ZERO: BigInteger;
    static ONE: BigInteger;
    constructor(value: string | bigint, radix?: number);
    add(other: BigInteger): BigInteger;
    subtract(other: BigInteger): BigInteger;
    multiply(other: BigInteger): BigInteger;
    divide(other: BigInteger): BigInteger;
    mod(other: BigInteger): BigInteger;
    modPow(exponent: BigInteger, modulus: BigInteger): BigInteger;
    negate(): BigInteger;
    abs(): BigInteger;
    compareTo(other: BigInteger): number;
    equals(other: BigInteger): boolean;
    toString(radix?: number): string;
}
