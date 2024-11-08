// BigInteger.ts

function toBigInt(hexString: string): bigint {
    return BigInt(`0x${hexString}`);
  }
  
  export default class BigInteger {
    value: bigint;
  
    constructor(value: string | number | BigInteger, radix: number = 10) {
      if (typeof value === 'string') {
        // Parse the string based on the given radix
        this.value = radix === 16 ? toBigInt(value) : BigInt(value);
      } else if (typeof value === 'number') {
        this.value = BigInt(value);
      } else if (value instanceof BigInteger) {
        this.value = value.value;
      } else {
        throw new Error('Unsupported BigInteger input type');
      }
    }
  
    toString(radix: number = 10): string {
      return this.value.toString(radix);
    }
  
    modPow(exponent: BigInteger, modulus: BigInteger): BigInteger {
      let base = this.value;
      let exp = exponent.value;
      const mod = modulus.value;
      let result = BigInt(1);
  
      base = base % mod;
      while (exp > BigInt(0)) {
        if (exp % BigInt(2) === BigInt(1)) {
          result = (result * base) % mod;
        }
        base = (base * base) % mod;
        exp = exp >> BigInt(1);
      }
      return new BigInteger(result.toString(16), 16);
    }
  
    multiply(other: BigInteger): BigInteger {
      return new BigInteger((this.value * other.value).toString(16), 16);
    }
  
    mod(modulus: BigInteger): BigInteger {
      return new BigInteger((this.value % modulus.value).toString(16), 16);
    }
  
    add(other: BigInteger): BigInteger {
      return new BigInteger((this.value + other.value).toString(16), 16);
    }
  
    subtract(other: BigInteger): BigInteger {
      return new BigInteger((this.value - other.value).toString(16), 16);
    }
  
    compareTo(other: BigInteger): number {
      if (this.value < other.value) return -1;
      if (this.value > other.value) return 1;
      return 0;
    }
  
    equals(other: BigInteger): boolean {
      return this.value === other.value;
    }
  
    isZero(): boolean {
      return this.value === BigInt(0);
    }
  }
  