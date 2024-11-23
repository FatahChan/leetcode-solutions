/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function recursiveMaxDept(root: TreeNode): number {
    const rightDepth = root.right ? recursiveMaxDept(root.right) : 0
    const leftDepth = root.left ? recursiveMaxDept(root.left) : 0
    return Math.max(rightDepth, leftDepth)  + 1
    
}
function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  return recursiveMaxDept(root);
}


// tests

const tree1 = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
console.log(maxDepth(tree1))

const tree2 = new TreeNode(1, null, new TreeNode(2))
console.log(maxDepth(tree2))

const tree3 = null
console.log(maxDepth(tree3))

const tree4 = new TreeNode(1)
console.log(maxDepth(tree4))