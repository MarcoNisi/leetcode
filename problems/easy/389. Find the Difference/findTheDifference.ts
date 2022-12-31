/*
You are given two strings s and t.
String t is generated by random shuffling string s and then add one more letter at a random position.
Return the letter that was added to t.

Example 1:
Input: s = "abcd", t = "abcde"
Output: "e"
Explanation: 'e' is the letter that was added.

Example 2:
Input: s = "", t = "y"
Output: "y"

Constraints:

0 <= s.length <= 1000
t.length == s.length + 1
s and t consist of lowercase English letters.
*/
const findTheDifference = (s: string, t: string): string => {
  const map: Record<string, number> = {}
  for (let i = 0; i < t.length; i++) {
    if (i < s.length) {
      if (map[s[i]] === undefined) {
        map[s[i]] = 0
      }
      map[s[i]]++
    }
    if (map[t[i]] === undefined) {
      map[t[i]] = 0
    }
    map[t[i]]--
  }
  for (let i in map) {
    if (map[i] === -1) {
      return i
    }
  }
  return ''
};