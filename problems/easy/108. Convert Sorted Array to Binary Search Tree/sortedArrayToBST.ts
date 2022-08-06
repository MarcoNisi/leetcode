/*
Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

Example 1:
Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Example 2:
Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

Constraints:
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in a strictly increasing order.
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

const halfSplit = (nums: number[]) => {
  const middle = Math.ceil(nums.length / 2)
  return {
    left: nums.slice(0, middle - 1),
    center: nums[middle - 1],
    right: nums.slice(middle, nums.length)
  }
}

const sortedArrayToBST = (nums: number[]): TreeNode | null => {
  if (nums.length === 0) return null
  const split = halfSplit(nums)
  const tree: TreeNode = new TreeNode(split.center, sortedArrayToBST(split.left), sortedArrayToBST(split.right))
  return tree
}

export default sortedArrayToBST