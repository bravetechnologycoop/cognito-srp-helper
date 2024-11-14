export default class BigInteger {
  private value: bigint;

  static ZERO = new BigInteger("0");
  static ONE = new BigInteger("1");

  constructor(value: string | bigint, radix = 16) {
    if (radix !== 16) {
      throw new Error(`Unsupported radix: ${radix}. Only radix 16 (hexadecimal) is supported.`);
    }

    if (typeof value === "bigint") {
      this.value = value;
    } else {
      const isNegative = value.startsWith("-");
      const sanitizedValue = isNegative ? value.slice(1) : value;
      this.value = BigInt(`0x${sanitizedValue}`);
      if (isNegative) {
        this.value = -this.value;
      }
    }
  }

  add(other: BigInteger): BigInteger {
    return new BigInteger(this.value + other.value);
  }

  subtract(other: BigInteger): BigInteger {
    return new BigInteger(this.value - other.value);
  }

  multiply(other: BigInteger): BigInteger {
    return new BigInteger(this.value * other.value);
  }

  divide(other: BigInteger): BigInteger {
    return new BigInteger(this.value / other.value);
  }

  mod(other: BigInteger): BigInteger {
    const result = this.value % other.value;
    return new BigInteger(result < 0n ? result + other.value : result);
  }

  modPow(exponent: BigInteger, modulus: BigInteger): BigInteger {
    if (modulus.value === 0n) {
      throw new Error("Modulus cannot be zero.");
    }

    let base = this.mod(modulus).value;
    let exp = exponent.value;
    let result = 1n;

    while (exp > 0n) {
      if (exp % 2n === 1n) {
        result = (result * base) % modulus.value;
      }
      exp /= 2n;
      base = (base * base) % modulus.value;
    }

    return new BigInteger(result < 0n ? result + modulus.value : result);
  }

  negate(): BigInteger {
    return new BigInteger(-this.value);
  }

  abs(): BigInteger {
    return new BigInteger(this.value < 0n ? -this.value : this.value);
  }

  compareTo(other: BigInteger): number {
    if (this.value < other.value) return -1;
    if (this.value > other.value) return 1;
    return 0;
  }

  equals(other: BigInteger): boolean {
    return this.value === other.value;
  }

  toString(radix = 16): string {
    if (radix !== 16) {
      throw new Error(`Unsupported radix: ${radix}. Only radix 16 (hexadecimal) is supported.`);
    }
    return this.value.toString(16);
  }
}
