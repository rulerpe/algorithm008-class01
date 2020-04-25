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
var inorderTraversal = function (root) {
  // stack all left node, if no more left node, push current node value to ans
  // then travere though right branch and find all left left sub-branch
  let ans = [];
  let stack = [];
  let cur = root;

  while (cur !== null || stack.length !== 0) {
    while (cur !== null) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    ans.push(cur.val);
    cur = cur.right;
  }
  return ans;
};
