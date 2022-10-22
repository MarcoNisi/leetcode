/*
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:
n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109

Follow-up: Could you solve the problem in linear time and in O(1) space?
*/

const majorityElement = (nums: number[]): number => {
  let maxFrequency = 0;
  const frequency: Record<number, number> = {};
  for (let i = 0; i < nums.length; i++) {
    if (!frequency[nums[i]]) {
      frequency[nums[i]] = 1;
    } else {
      frequency[nums[i]]++;
    }
    if (
      !frequency[maxFrequency] ||
      frequency[maxFrequency] < frequency[nums[i]]
    ) {
      maxFrequency = nums[i];
    }
    if (frequency[maxFrequency] > nums.length / 2) {
      return maxFrequency;
    }
  }
  return maxFrequency;
};

const betterMajorityElement = (nums: number[]): number => {
  let count = 0;
  let maxFrequency = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === maxFrequency) {
      count++;
    } else {
      count--;
    }
    if (count === 0) {
      maxFrequency = nums[i];
      count++;
    }
  }
  return maxFrequency;
};
