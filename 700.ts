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

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    while (true){
        if (root == null) return null
        if (root.val === val){
            return root
        }
        if (root.val > val){
            if (root.left){
                root = root.left
            }else {
                return null
            }
        }

        if (root.val < val) {
            if(root.right){
                root = root.right
            }else {
                return null
            }
        }

    }
}


// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]

const tree1 = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7))
console.log(searchBST(tree1, 2))


// Input: root = [4,2,7,1,3], val = 5
// Output: []

const tree2 = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7))
console.log(searchBST(tree2, 5))