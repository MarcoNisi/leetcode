/*
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: rowIndex = 3
Output: [1,3,3,1]

Example 2:
Input: rowIndex = 0
Output: [1]

Example 3:
Input: rowIndex = 1
Output: [1,1]

Constraints:
0 <= rowIndex <= 33

Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?
*/

const getRow = (rowIndex: number): number[] => {
  if (rowIndex === 0) {
    return [1]
  }
  if (rowIndex === 1) {
    return [1, 1]
  }
  let base = [1, 1]
  for (let i = 2; i <= rowIndex; i++) {
    const newLevel = [1]
    for (let j = 0; j < base.length - 1; j++) {
      newLevel.push(base[j] + base[j + 1])
    }
    newLevel.push(1)
    if (i === rowIndex) {
      return newLevel
    } else {
      base = newLevel
    }
  }
  return []
}

export default getRow