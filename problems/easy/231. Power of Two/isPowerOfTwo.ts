/*
Given an integer n, return true if it is a power of two. Otherwise, return false.
An integer n is a power of two, if there exists an integer x such that n == 2x.

Example 1:
Input: n = 1
Output: true
Explanation: 20 = 1

Example 2:
Input: n = 16
Output: true
Explanation: 24 = 16

Example 3:
Input: n = 3
Output: false
 
Constraints:
-2^31 <= n <= 2^31 - 1

Follow up: Could you solve it without loops/recursion?
*/

const isPowerOfTwo = (n: number): boolean => {
  if (n === 1) return true
  while (n > 1 && n % 2 === 0) {
    n /= 2
  }
  return n === 1
};

const notLoopIsPowerOfTwo = (n: number): boolean => {
  if (n <= 0) return false
  return (n & (n - 1)) === 0
}