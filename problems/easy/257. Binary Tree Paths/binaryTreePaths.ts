/*
Given the root of a binary tree, return all root-to-leaf paths in any order.
A leaf is a node with no children.

Example 1:
Input: root = [1,2,3,null,5]
Output: ["1->2->5","1->3"]

Example 2:
Input: root = [1]
Output: ["1"]
 
Constraints:
The number of nodes in the tree is in the range [1, 100].
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

export const binaryTreePaths = (root: TreeNode | null): string[] => {
  const paths: string[] = [];
  const elements = [root];
  const collect = (node: TreeNode | null, path: string) => {
    if (node) {
      if (path) {
        path += `->${node.val}`;
      } else {
        path = String(node.val);
      }
      if (node.left) {
        collect(node.left, path);
      }
      if (node.right) {
        collect(node.right, path);
      }
      if (!node.left && !node.right) {
        paths.push(path);
      }
    }
  };
  collect(root, "");
  return paths;
};
