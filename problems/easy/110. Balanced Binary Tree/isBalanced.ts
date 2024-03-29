/*
Given a binary tree, determine if it is height-balanced.
For this problem, a height-balanced binary tree is defined as:
a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2:
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:
Input: root = []
Output: true

Constraints:
The number of nodes in the tree is in the range [0, 5000].
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

const height = (node: TreeNode | null, currentHeight: number): number => {
  if (node === null) return currentHeight
  else {
    const hLeft = height(node.left, currentHeight + 1)
    const hRight = height(node.right, currentHeight + 1)
    if (hLeft === -1 || hRight === -1) {
      return -1
    } else if (Math.abs(hLeft - hRight) > 1) {
      return -1
    } else {
      return Math.max(hLeft, hRight)
    }
  }
}

const isBalanced = (root: TreeNode | null): boolean => {
  if (root === null) return true
  else {
    return height(root, 0) !== -1 
  }
}

export default isBalanced