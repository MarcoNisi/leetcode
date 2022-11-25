/*
Given a positive integer num, write a function which returns True if num is a perfect square else False.
Follow up: Do not use any built-in library function such as sqrt.

Example 1:
Input: num = 16
Output: true

Example 2:
Input: num = 14
Output: false

Constraints:

1 <= num <= 2^31 - 1
*/
const isPerfectSquare = (num: number): boolean => {
  if (num === 1) return true
  if (num === 4) return true
  let min = 0
  let max = Math.floor(num / 2)
  let i = Math.floor((max - min) / 2) + min
  while (true) {
    const r = i * i
    if (r === num) {
      return true
    } else if (max - min > 1) {
      if (r < num) {
        min = i
        i = Math.floor((max - min) / 2) + min
      } else if (r > num) {
        max = i
        i = Math.floor((max - min) / 2) + min
      }
    } else {
      return false
    }
  }
};