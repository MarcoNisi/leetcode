/*
Given the roots of two binary trees p and q, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Example 1:
Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:
Input: p = [1,2], q = [1,null,2]
Output: false

Example 3:
Input: p = [1,2,1], q = [1,1,2]
Output: false

Constraints:
The number of nodes in both trees is in the range [0, 100].
-104 <= Node.val <= 104
*/

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const recursiveIsSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
  if (p === null && q === null) return true
  if (p === null || q === null) return false
  if (p.val !== q.val) return false
  return recursiveIsSameTree(p.left, q.left) && recursiveIsSameTree(p.right, q.right)
}

const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
  const qStack: TreeNode[] = []
  const pStack: TreeNode[] = []
  let pCurrent: TreeNode | null = p
  let qCurrent: TreeNode | null = q
  while (qStack.length || pStack.length || pCurrent || qCurrent) {
    while (pCurrent !== null && qCurrent !== null) {
      pStack.push(pCurrent)
      qStack.push(qCurrent)
      if (pCurrent) {
        pCurrent = pCurrent.left
      }
      if (qCurrent) {
        qCurrent = qCurrent.left
      }
    }
    const lastP = pStack.pop()
    const lastQ = qStack.pop()
    if (lastP?.val !== lastQ?.val) {
      return false
    } else {
      if (lastP) {
        pCurrent = lastP.right
      }
      if (lastQ) {
        qCurrent = lastQ.right
      }
    }
  }
  return true
}

export default null