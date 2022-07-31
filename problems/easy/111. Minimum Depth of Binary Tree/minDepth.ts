/*
Given a binary tree, find its minimum depth.
The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
Note: A leaf is a node with no children.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 2

Example 2:
Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5

Constraints:
The number of nodes in the tree is in the range [0, 105].
-1000 <= Node.val <= 1000
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

const depth = (root: TreeNode | null, currentDepth: number): number => {
  if (root === null) return currentDepth
  if (root.left === null && root.right === null) return currentDepth
  let leftDepth = 100001
  let rightDepth = 100001
  if (root.left) {
    leftDepth = depth(root.left, currentDepth + 1)
  }
  if (root.right) {
    rightDepth = depth(root.right, currentDepth + 1)
  }
  return Math.min(leftDepth, rightDepth)
}

const minDepth = (root: TreeNode | null): number => {
  if (root === null) return 0
  return depth(root, 1)
}

const betterMinDepth = (root: TreeNode | null): number => {
  if (root === null) return 0
  const queue: [TreeNode, number][] = [[root, 1]]
  while (queue.length > 0) {
    const lastElement = queue.splice(0, 1).at(0)
    if (lastElement) {
      const [node, depth] = lastElement
      if (node.left === null && node.right === null) {
        return depth
      }
      if (node.left !== null) {
        queue.push([node.left, depth + 1])
      }
      if (node.right !== null) {
        queue.push([node.right, depth + 1])
      }
    }
  }
  return 0
}

export default minDepth