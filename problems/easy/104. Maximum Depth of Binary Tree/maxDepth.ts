/*
Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2

Constraints:
The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100
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

const recursiveMaxDepth = (root: TreeNode | null): number => {
  if (!root) return 0
  return 1 + Math.max(recursiveMaxDepth(root.left), recursiveMaxDepth(root.right))
}

const maxDepth = (root: TreeNode | null): number => {
  if (!root) return 0
  let max = 0
  const queue: [TreeNode, number][] = [[root, 1]]
  while (queue.length) {
    const lastElement = queue.shift()
    if (lastElement) {
      if (lastElement[0].left) {
        queue.push([lastElement[0].left, lastElement[1] + 1])
      }
      if (lastElement[0].right) {
        queue.push([lastElement[0].right, lastElement[1] + 1])
      }
      if (max < lastElement[1]) {
        max = lastElement[1]
      }
    }
  }
  return max
}

export default maxDepth