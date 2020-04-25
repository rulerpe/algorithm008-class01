/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  let ans = [];
  const findNode = (root) => {
    if (root === null) return;
    ans.push(root.val);
    for (let i = 0; i < root.children.length; i++) {
      findNode(root.children[i]);
    }
  };
  findNode(root);
  return ans;
};
