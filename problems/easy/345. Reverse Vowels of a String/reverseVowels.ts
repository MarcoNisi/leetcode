/*
Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:
Input: s = "hello"
Output: "holle"

Example 2:
Input: s = "leetcode"
Output: "leotcede"

Constraints:
1 <= s.length <= 3 * 10^5
s consist of printable ASCII characters.
*/

const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
const reverseVowels = (s: string): string => {
  const a = s.split("");
  let i = -1;
  let j = a.length;
  while (i < j) {
    if (!vowels.has(a[i])) {
      i++;
    }
    if (!vowels.has(a[j])) {
      j--;
    }
    if (vowels.has(a[i]) && vowels.has(a[j])) {
      const tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
      i++;
      j--;
    }
  }
  return a.join("");
};
