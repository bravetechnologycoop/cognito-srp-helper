export default class BigInteger {
    value: bigint;
    static ZERO: BigInteger;
    static ONE: BigInteger;
    constructor(value: string | number | BigInteger, radix?: number);
    toString(radix?: number): string;
    modPow(exponent: BigInteger, modulus: BigInteger): BigInteger;
    multiply(other: BigInteger): BigInteger;
    mod(modulus: BigInteger): BigInteger;
    add(other: BigInteger): BigInteger;
    subtract(other: BigInteger): BigInteger;
    compareTo(other: BigInteger): number;
    equals(other: BigInteger): boolean;
    isZero(): boolean;
    abs(): BigInteger;
}
