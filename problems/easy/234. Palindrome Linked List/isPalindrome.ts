/*
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false

Constraints:
The number of nodes in the list is in the range [1, 10^5].
0 <= Node.val <= 9
 
Follow up: Could you do it in O(n) time and O(1) space?
*/

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export const isPalindrome = (head: ListNode | null): boolean => {
  let l = 0
  let current = head
  let values = []
  while (current) {
    l++
    values.push(current.val)
    current = current.next
  }
  for (let i = 0; i < l / 2; i++) {
    if (values[i] !== values[values.length - i - 1]) {
      return false
    }
  }
  return true
};

export const isPalindromeWithConstantSpace = (head: ListNode | null): boolean => {
  let slow = head
  let fast = head
  while (slow !== null && fast !== null) {
    slow = slow.next
    if (fast.next) {
      fast = fast.next.next
    } else {
      fast = null
    }
  }
  const reverse = (head: ListNode | null) => {
    let front: ListNode | null = head
    let current: ListNode | null = head
    let back: ListNode | null = null
    while (current) {
      front = front ? front.next : null
      current.next = back
      back = current
      current = front
    }
    return back
  }
  fast = reverse(slow)
  slow = head
  while (slow && fast) {
    if (slow.val !== fast.val) {
      return false
    }
    slow = slow.next
    fast = fast.next
  }
  return true
}