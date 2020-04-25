/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let ans = [];
  let rightStack = [];
  let node = root;
  while (node !== null) {
    ans.push(node.val);
    if (node.right !== null) {
      rightStack.push(node.right);
    }
    node = node.left;
    if (node === null && rightStack.length !== 0) {
      node = rightStack.pop();
    }
  }
  return ans;
};
