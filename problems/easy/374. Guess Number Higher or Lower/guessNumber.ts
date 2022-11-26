/*
We are playing the Guess Game. The game is as follows:
I pick a number from 1 to n. You have to guess which number I picked.
Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.
You call a pre-defined API int guess(int num), which returns three possible results:

-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).
Return the number that I picked.

Example 1:
Input: n = 10, pick = 6
Output: 6

Example 2:
Input: n = 1, pick = 1
Output: 1

Example 3:
Input: n = 2, pick = 1
Output: 1

Constraints:
1 <= n <= 2^31 - 1
1 <= pick <= n
*/

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */
const guess = (num: number) => {
  return Math.random()
}

const guessNumber = (n: number): number => {
  if (n === 1) return 1;
  if (guess(n) === 0) {
    return n;
  }
  let pick = Math.round(n / 2);
  let max = n;
  let min = 0;
  let r = guess(pick);
  while (r !== 0) {
    if (r === 1) {
      min = pick;
      pick = Math.floor((max - pick) / 2) + pick;
    } else {
      max = pick;
      pick = Math.floor((pick - min) / 2) + min;
    }
    r = guess(pick);
  }
  return pick;
}
