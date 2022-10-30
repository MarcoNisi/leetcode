/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Constraints:
1 <= s.length, t.length <= 5 * 10^4
s and t consist of lowercase English letters.
*/
const isAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false;
  const hash: Record<string, number> = {};
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] !== undefined) {
      hash[s[i]]++;
    } else {
      hash[s[i]] = 1;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (hash[t[i]] === undefined) {
      return false;
    } else {
      hash[t[i]]--;
      if (hash[t[i]] < 0) {
        return false;
      }
    }
  }
  return true;
};
