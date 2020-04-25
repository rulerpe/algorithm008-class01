/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) return [];
  let ans = [];
  let queue = [root];
  while (queue.length !== 0) {
    let level = [];
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let cur = queue.shift();
      level.push(cur.val);
      if (cur.children) {
        queue.push(...cur.children);
      }
    }
    ans.push(level);
  }
  return ans;
};
