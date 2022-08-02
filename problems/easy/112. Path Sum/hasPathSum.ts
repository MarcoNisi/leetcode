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

const hasPathSum = (root: TreeNode | null, targetSum: number): boolean => {
  if (!root) return false
  const queue: [TreeNode, number][] = [[root, root.val]]
  while (queue.length) {
    const element = queue[0]
    queue.shift()
    const node = element[0]
    const sum = element[1]
    if (node.left === null && node.right === null) {
      if (sum === targetSum) {
        return true
      }
    }
    const left = node.left
    if (left) {
      queue.unshift([left, sum + left.val])
    }
    const right = node.right
    if (right) {
      queue.push([right, sum + right.val])
    }
  }
  return false
}

export default hasPathSum