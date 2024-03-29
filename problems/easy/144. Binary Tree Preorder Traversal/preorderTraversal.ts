/*
Given the root of a binary tree, return the preorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [1,2,3]

Example 2:
Input: root = []
Output: []

Example 3:
Input: root = [1]
Output: [1]

Constraints:
The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100

Follow up: Recursive solution is trivial, could you do it iteratively?
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

const preorderTraversal = (root: TreeNode | null): number[] => {
  if (!root) return []
  const queue: (TreeNode | null)[] = [root]
  const values: number[] = []
  while (queue.length) {
    const element = queue.shift()
    if (element) {
      values.push(element.val)
      if (element.right) {
        queue.unshift(element.right)
      }
      if (element.left) {
        queue.unshift(element.left)
      }
    }
  }
  return values
}

export default preorderTraversal