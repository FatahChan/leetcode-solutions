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

function getLeafs(root: TreeNode, leafs: number[]) {
  if (root.left === null && root.right === null) {
    // leaf
    leafs.push(root.val);
  }

  if (root.left) getLeafs(root.left, leafs);
  if (root.right) getLeafs(root.right, leafs);

}
function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const leafs1 = [];
  const leafs2 = [];
  if (root1) getLeafs(root1, leafs1);

  if (root2) getLeafs(root2, leafs2);


  return leafs1.join(",") === leafs2.join(",")
}


// tests

// Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
// Output: true

const root1 = new TreeNode(3, 
  new TreeNode(5, 
    new TreeNode(6), 
    new TreeNode(2, 
      new TreeNode(7), 
      new TreeNode(4))
    ), 
  new TreeNode(1, 
    new TreeNode(9),
    new TreeNode(8)
  )
  )
const root2 = new TreeNode(3, 
  new TreeNode(5, 
    new TreeNode(6), 
    new TreeNode(7)), 
  new TreeNode(1, 
    new TreeNode(4), 
    new TreeNode(2, 
      new TreeNode(9), 
      new TreeNode(8))))
console.log(leafSimilar(root1, root2)) // true


// Input: root1 = [1,2,3], root2 = [1,3,2]
// Output: false

const root3 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
const root4 = new TreeNode(1, new TreeNode(3), new TreeNode(2))
console.log(leafSimilar(root3, root4)) // false