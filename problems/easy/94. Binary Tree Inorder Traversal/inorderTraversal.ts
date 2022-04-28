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