/*
You are given a sorted unique integer array nums.
A range [a,b] is the set of all integers from a to b (inclusive).
Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
Each range [a,b] in the list should be output as:
"a->b" if a != b
"a" if a == b
 
Example 1:
Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"

Example 2:
Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"

Constraints:
0 <= nums.length <= 20
-2^31 <= nums[i] <= 2^31 - 1
All the values of nums are unique.
nums is sorted in ascending order.
*/

const summaryRanges = (nums: number[]): string[] => {
  if (nums.length === 0) return []
  const ranges: string[] = []
  let first = nums[0]
  let last = nums[0]
  const add = (range: string[], first: number, last: number) => {
    if (first === last) {
      ranges.push(String(first))
    } else {
      ranges.push(`${first}->${last}`)
    }
  }
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - last === 1) {
      last = nums[i]
    } else {
      add(ranges, first, last)
      last = nums[i]
      first = nums[i]
    }
  }
  add(ranges, first, last)
  return ranges
};