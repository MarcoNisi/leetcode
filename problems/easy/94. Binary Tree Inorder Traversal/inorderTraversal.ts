/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [1,3,2]

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

const inorderTraversal = (root: TreeNode | null): number[] => {
  const result: number[] = []

  const collect = (node: TreeNode) => {
    if (node.left) {
      collect(node.left)
    }
    result.push(node.val)
    if (node.right) {
      collect(node.right)
    }
  }

  if (root) {
    collect(root)
  } else {
    return []
  }

  return result
}
const betterInorderTraversal = (root: TreeNode | null): number[] => {
  const result: number[] = []
  const stack: TreeNode[] = []
  let current: TreeNode | null = root
  while (current !== null || stack.length !== 0) {
    while (current !== null) {
      stack.push(current)
      current = current.left
    }
    const lastNodeInStack = stack.pop()
    if (lastNodeInStack) {
      result.push(lastNodeInStack.val)
      current = lastNodeInStack.right
    }
  }
  return result
}