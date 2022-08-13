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