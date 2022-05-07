/*
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1:
Input: root = [1,2,2,3,4,4,3]
Output: true

Example 2:
Input: root = [1,2,2,null,3,null,3]
Output: false

Constraints:
The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100
 
Follow up: Could you solve it both recursively and iteratively?
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

const isMirror = (node1: TreeNode | null, node2: TreeNode | null): boolean => {
  if (node1 === null && node2 === null) return true
  if (node1 === null || node2 === null) return false
  if (node1.val !== node2.val) return false
  return isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left)
}

const isSymmetric = (root: TreeNode | null): boolean => {
  if (!root) return true
  return isMirror(root.left, root.right)
};

const iterativeIsSymmetric = (root: TreeNode | null): boolean => {
  if (!root) return true
  const queue: (TreeNode | null)[] = []
  queue.push(root.left)
  queue.push(root.right)
  while (queue.length) {
    const lastLeft = queue.pop()
    const lastRight = queue.pop()
    if (lastRight === null && lastLeft === null) continue
    if (lastRight === null || lastLeft === null) return false
    if (lastRight?.val !== lastLeft?.val) return false
    if (lastLeft && lastRight) {
      queue.push(lastLeft?.left)
      queue.push(lastRight?.right)
      queue.push(lastLeft?.right)
      queue.push(lastRight?.left)
    }
  }
  return true
}

const testCase = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3)))
const recursiveResults = []
const iterativeResults = []
let start = Date.now()
for (let i = 0; i < 1000000; i++) {
  recursiveResults.push(isSymmetric(testCase))
}
let end = Date.now()
console.log('recursive', end - start)
start = Date.now()
for (let i = 0; i < 1000000; i++) {
  iterativeResults.push(iterativeIsSymmetric(testCase))
}
end = Date.now()
console.log('iterative', end - start)

export default null;
