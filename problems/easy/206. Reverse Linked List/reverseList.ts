/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []

Constraints:
The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 
Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const iterativeReverseList = (head: ListNode | null): ListNode | null => {
  let prev = null
  let current = head
  let next = null
  while (current) {
    next = current.next
    current.next = prev 
    prev = current
    current = next
  }
  return prev
};

export const recursiveReverseList = (head: ListNode | null): ListNode | null => {
  const fn = (parent: ListNode, child: ListNode | null, first = false): ListNode | null => {
    if (child) {
      const next = child.next
      if (first) {
        parent.next = null
      }
      child.next = parent
      return fn(child, next)
    } else {
      return parent
    }
  }
  if (!head) {
    return head
  } else {
    return fn(head, head.next, true)
  }
}