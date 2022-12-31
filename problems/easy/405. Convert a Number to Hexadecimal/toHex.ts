/*
Given an integer num, return a string representing its hexadecimal representation. For negative integers, two’s complement method is used.
All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself.
Note: You are not allowed to use any built-in library method to directly solve this problem.

Example 1:
Input: num = 26
Output: "1a"

Example 2:
Input: num = -1
Output: "ffffffff"

Constraints:
-2^31 <= num <= 2^31 - 1
*/

const toHex = (num: number): string => {
  const map = (n: number) => {
    const _map = {
      10: "a",
      11: "b",
      12: "c",
      13: "d",
      14: "e",
      15: "f",
    };
    if (n < 10) return String(n);
    else return _map[n as keyof typeof _map];
  };

  let partialResult = [Math.floor(Math.abs(num) / 16), Math.abs(num) % 16];
  const result = [partialResult[1]];
  let c = 0;
  while (partialResult[0] >= 16 && c < 10) {
    partialResult = [Math.floor(partialResult[0] / 16), partialResult[0] % 16];
    result.unshift(partialResult[1]);
    c++;
  }
  if (partialResult[0] !== 0) {
    result.unshift(partialResult[0]);
  }
  if (num < 0) {
    for (let i = 0; i < 8; i++) {
      if (result[i] === undefined) {
        result.unshift(15);
      } else {
        result[i] = 15 - result[i];
      }
    }
    let i = 7;
    result[i]++;
    while (result[i] > 15 && i > 0) {
      result[i] = 0;
      result[i - 1]++;
      i--;
    }
  }
  let strResult = "";
  for (let i = 0; i < result.length; i++) {
    strResult += map(result[i]);
  }
  return strResult;
};

export default toHex;
