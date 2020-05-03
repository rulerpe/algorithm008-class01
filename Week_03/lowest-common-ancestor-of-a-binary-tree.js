/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const helper = (root, p, q) => {
    if (root === null) {
      return null;
    }
    if (root === p || root === q) {
      return root;
    }

    let left = helper(root.left, p, q);
    let right = helper(root.right, p, q);
    if (left === null) {
      return right;
    }
    if (right === null) {
      return left;
    }
    if (left && right) {
      return root;
    }
    return null;
  };
  return helper(root, p, q);
};
