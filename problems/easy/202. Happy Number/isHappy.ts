/*
Write an algorithm to determine if a number n is happy.
A happy number is a number defined by the following process:
Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

Example 1:
Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

Example 2:
Input: n = 2
Output: false

Constraints:
1 <= n <= 2^31 - 1
*/

const isHappy = (n: number): boolean => {
  const digits = (nn: number) => {
    const d = []
    const i = 10
    while (nn > 0) {
      d.unshift(nn % i)
      nn = Math.floor(nn / i)
    }
    return d
  }
  const sum = (a: number[]) => {
    let s = 0
    for (let i = 0; i < a.length; i++) {
      s += a[i]
    }
    return s
  }
  const pow = (a: number[]) => {
    const powed = []
    for (let i = 0; i < a.length; i++) {
      powed.push(Math.pow(a[i], 2))
    }
    return powed
  }
  let d = pow(digits(n))
  let s = sum(d)
  d = digits(s)
  do {
    d = pow(d)
    s = sum(d)
    d = digits(s)
  } while (d.length !== 1)
  return d[0] === 1
}