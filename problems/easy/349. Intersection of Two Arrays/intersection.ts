/*
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

Constraints:
1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
*/
const intersection = (nums1: number[], nums2: number[]): number[] => {
  const map: Record<number, boolean> = {}
  const result: number[] = []
  for (let i = 0; i < nums1.length; i++) {
    map[nums1[i]] = false
  }
  for (let i = 0; i < nums2.length; i++) {
    if (map[nums2[i]] === false) {
      map[nums2[i]] = true
      result.push(nums2[i])
    }
  }
  return result
};

const intersectionWithSet = (nums1: number[], nums2: number[]): number[] => {
  const map = new Set()
  const result = new Set<number>()
  for (let i = 0; i < nums1.length; i++) {
    map.add(nums1[i])
  }
  for (let i = 0; i < nums2.length; i++) {
    if (map.has(nums2[i])) {
      result.add(nums2[i])
    }
  }
  return Array.from(result.values())
};

const testCase1 = [1,2,2,1]
const testCase2 = [2,2]
const firstResults = []
const secondResults = []
let start = Date.now()
for (let i = 0; i < 1000000; i++) {
  firstResults.push(intersection(testCase1, testCase2))
}
let end = Date.now()
console.log('first', end - start)
start = Date.now()
for (let i = 0; i < 1000000; i++) {
  secondResults.push(intersectionWithSet(testCase1, testCase2))
}
end = Date.now()
console.log('second', end - start)

export default intersectionWithSet