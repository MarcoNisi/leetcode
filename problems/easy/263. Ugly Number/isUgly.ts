/*
An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
Given an integer n, return true if n is an ugly number.

Example 1:
Input: n = 6
Output: true
Explanation: 6 = 2 × 3

Example 2:
Input: n = 1
Output: true
Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.

Example 3:
Input: n = 14
Output: false
Explanation: 14 is not ugly since it includes the prime factor 7.

Constraints:

-2^31 <= n <= 2^31 - 1
*/

const isUgly = (n: number): boolean => {
  if (n <= 0) return false;
  if (n === 1) return true;
  let realDivisors = [2, 3, 5];
  do {
    realDivisors = realDivisors.filter((d) => Number.isInteger(n / d));
    for (let i = 0; i < realDivisors.length; i++) {
      n /= realDivisors[i];
    }
  } while (realDivisors.length > 0);

  return n === 1;
};
