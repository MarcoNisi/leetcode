/*
Given a non-negative integer x, compute and return the square root of x.
Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

Example 1:
Input: x = 4
Output: 2

Example 2:
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.

Constraints:
0 <= x <= 231 - 1
*/

const mySqrt = (x: number): number => {
  let sqrt = 0
  let result = sqrt * sqrt
  while (result <= x) {
    sqrt++
    result = sqrt * sqrt
  }
  return sqrt - 1
}
const betterMySqrt = (x: number): number => {
  let left = 1
  let right = Math.ceil(x / 2)
  if (x < 2) return x
  while (true) {
    let mid = Math.ceil((right - left) / 2) + left
    let result = mid * mid
    let prevResult = (mid - 1) * (mid - 1)
    if ((result > x && prevResult <= x)) {
      return mid - 1
    } else if (right - left <= 1) {
      return mid
    } else if (result > x) {
      right = mid
    } else {
      left = mid
    }
  }
}

// Performance comparison
const numbers = Array.from({ length: 1000000 }).map((_, i) => i)

let start = Date.now()
const f = numbers.map(mySqrt)
let end = Date.now()
console.log('mySqrt', end - start) // 420ms on my computer

start = Date.now()
const s = numbers.map(betterMySqrt)
end = Date.now()
console.log('betterMySqrt', end - start) // 150ms on my computer