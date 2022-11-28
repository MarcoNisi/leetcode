/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1

Constraints:
1 <= s.length <= 10^5
s consists of only lowercase English letters.
*/
const firstUniqChar = (s: string): number => {
  const repeatMap: Record<string, [number, number]> = {}
  for (let i = 0; i < s.length; i++) {
    if (repeatMap[s[i]] === undefined) {
      repeatMap[s[i]] = [i, 0]
    }
    repeatMap[s[i]][1]++
  }
  for (let k in repeatMap) {
    if (repeatMap[k][1] === 1) {
      return repeatMap[k][0]
    }
  }
  return -1
};