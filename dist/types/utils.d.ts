/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import { Buffer } from "buffer/";
import BigInteger from "./BigInteger";
/**
 * Calculate a hash from a bitArray
 *
 * @param buf Value to hash.
 * @returns Hex-encoded hash.
 */
export declare const hash: (buf: Buffer | string) => string;
/**
 * Calculate a hash from a hex string
 *
 * @param hexStr Value to hash.
 * @returns Hex-encoded hash.
 */
export declare const hexHash: (hexStr: string) => string;
/**
 * Returns an unambiguous, even-length hex string of the two's complement
 * encoding of an integer.
 *
 * It is compatible with the hex encoding of Java's BigInteger's toByteArray(),
 * which returns a byte array containing the two's-complement representation of
 * a BigInteger. The array contains the minimum number of bytes required to
 * represent the BigInteger, including at least one sign bit.
 *
 * Examples showing how ambiguity is avoided by left padding with:
 * 	"00" (for positive values where the most-significant-bit is set)
 *  "FF" (for negative values where the most-significant-bit is set)
 *
 * padHex(bigInteger.fromInt(-236))  === "FF14"
 * padHex(bigInteger.fromInt(20))    === "14"
 *
 * padHex(bigInteger.fromInt(-200))  === "FF38"
 * padHex(bigInteger.fromInt(56))    === "38"
 *
 * padHex(bigInteger.fromInt(-20))   === "EC"
 * padHex(bigInteger.fromInt(236))   === "00EC"
 *
 * padHex(bigInteger.fromInt(-56))   === "C8"
 * padHex(bigInteger.fromInt(200))   === "00C8"
 *
 * @param bigInt Number to encode.
 * @returns Even-length hex string of the two's complement encoding.
 */
export declare const padHex: (bigInt: BigInteger) => string;
/**
 * Returns a Buffer with a sequence of random nBytes
 *
 * @param nBytes
 * @returns Fixed-length sequence of random bytes
 */
export declare const randomBytes: (nBytes: number) => Buffer;
/**
 * Converts a hexadecimal encoded string to a Uint8Array of bytes.
 *
 * @param encoded The hexadecimal encoded string
 */
export declare const getBytesFromHex: (encoded: string) => Uint8Array;
