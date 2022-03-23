/*
Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward.
For example, 121 is a palindrome while 123 is not.
 
Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 
Constraints:

-231 <= x <= 231 - 1
*/
const isPalindrome = (num: number) => {
  const strNum = String(num)
  for (let i = 0; i < Math.floor(strNum.length / 2); i++) {
    if (strNum[i] !== strNum[strNum.length - i - 1]) return false
  }
  return true
}

/*
Follow up: Could you solve it without converting the integer to a string?
*/
const isPalindromeWithoutString = (num: number) => {
  const digits = Math.ceil(Math.log10(num + 1))
  let acc = num
  const actualDigits: number[] = []
  if (num < 0) return false
  for (let i = digits - 1; i >= 0; i--) {
    const divider = Math.pow(10, i)
    const result = Math.floor(acc / divider)
    acc -= divider * result
    actualDigits.push(result)
  }
  for (let i = 0; i < Math.floor(actualDigits.length / 2); i++) {
    if (actualDigits[i] !== actualDigits[actualDigits.length - i - 1]) return false
  }
  return true
}