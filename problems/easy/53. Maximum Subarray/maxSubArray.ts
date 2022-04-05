/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
A subarray is a contiguous part of an array.

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:
Input: nums = [1]
Output: 1

Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23

Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

const maxSubArray = (nums: number[]): number => {
  const sums = [nums[0]]
  let max = sums[0]
  for (let i = 1; i < nums.length; i++) {
    const sumWithCurrentNum = sums[i - 1] + nums[i]
    if (sumWithCurrentNum > nums[i]) {
      sums.push(sumWithCurrentNum)
    } else {
      sums.push(nums[i])
    }
    if (max < sums[i]) {
      max = sums[i]
    }
  }
  return max
}