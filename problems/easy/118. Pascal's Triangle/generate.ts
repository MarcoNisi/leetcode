/*
Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]

Constraints:
1 <= numRows <= 30
*/

const generate = (numRows: number): number[][] => {
  const triangle: number[][] = []
  if (numRows >= 1) {
    triangle.push([1])
  }
  if (numRows >= 2) {
    triangle.push([1, 1])
  }
  for (let i = 2; i < numRows; i++) {
    const previousLevel = triangle[i - 1]
    const newLevel = [previousLevel[0]]

    for (let j = 0; j < previousLevel.length - 1; j++) {
      newLevel.push(previousLevel[j] + previousLevel[j + 1])
    }

    newLevel.push(previousLevel[previousLevel.length - 1])

    triangle.push(newLevel)
  }
  return triangle
}

export default generate