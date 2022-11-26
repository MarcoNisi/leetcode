/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true

Constraints:
1 <= ransomNote.length, magazine.length <= 10^5
ransomNote and magazine consist of lowercase English letters.
*/
const canConstruct = (ransomNote: string, magazine: string): boolean => {
  const magazineMap: Record<string, number> = {};
  for (let i = 0; i < magazine.length; i++) {
    if (!magazineMap[magazine[i]]) {
      magazineMap[magazine[i]] = 1;
    } else {
      magazineMap[magazine[i]]++;
    }
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (!magazineMap[ransomNote[i]]) {
      return false;
    } else {
      magazineMap[ransomNote[i]]--;
    }
  }
  return true;
};
