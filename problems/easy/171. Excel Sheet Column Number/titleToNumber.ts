/*
Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

For example:
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...

Example 1:
Input: columnTitle = "A"
Output: 1

Example 2:
Input: columnTitle = "AB"
Output: 28

Example 3:
Input: columnTitle = "ZY"
Output: 701

Constraints:
1 <= columnTitle.length <= 7
columnTitle consists only of uppercase English letters.
columnTitle is in the range ["A", "FXSHRXW"].
*/

const titleToNumber = (columnTitle: string): number => {
  const base = 64
  const max = 26
  let result = 0
  for (let i = 0; i < columnTitle.length; i++) {
    const charCode = columnTitle.charCodeAt(i) - base
    const exp = Math.pow(max, columnTitle.length - i - 1)
    result += charCode * exp
  }
  return result
};