/*
Implement strStr().
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
Clarification:
What should we return when needle is an empty string? This is a great question to ask during an interview.
For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

Example 1:
Input: haystack = "hello", needle = "ll"
Output: 2

Example 2:
Input: haystack = "aaaaa", needle = "bba"
Output: -1
 
Constraints:
1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.*/

/*
I intentionally didn't use "substring" method
*/

const strStr = (haystack: string, needle: string): number => {
  if (!needle) return 0
  let needleIndex = 0
  let commonPartStartingIndex = -1
  for (let i = 0; i < haystack.length; i++) {
    // check if the current letter is equal to current needle letter
    if (haystack[i] === needle[needleIndex]) {
      // if needleIndex is zero then is the first marching letter
      if (needleIndex === 0) {
        commonPartStartingIndex = i
      }
      needleIndex++
      // if needleIndex is equal to needle length then we found the substring and we can return the the index
      if (needleIndex === needle.length) {
        return commonPartStartingIndex
      }
    } else {
      // if the current letter is not equal with current needle letter then we need to reset the needle index
      needleIndex = 0
      // we need to reset the index to the first common letter
      if (commonPartStartingIndex >= 0) {
        i = commonPartStartingIndex
      }
      commonPartStartingIndex = -1
    }
  }
  return -1
}