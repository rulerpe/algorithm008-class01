/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 *
 * https://leetcode.com/problems/valid-perfect-square/description/
 *
 * algorithms
 * Easy (41.05%)
 * Likes:    794
 * Dislikes: 166
 * Total Accepted:    209.5K
 * Total Submissions: 505.4K
 * Testcase Example:  '16'
 *
 * Given a positive integer num, write a function which returns True if num is
 * a perfect square else False.
 *
 * Follow up: Do not use any built-in library function such as sqrt.
 *
 *
 * Example 1:
 * Input: num = 16
 * Output: true
 * Example 2:
 * Input: num = 14
 * Output: false
 *
 *
 * Constraints:
 *
 *
 * 1 <= num <= 2^31 - 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  // 1 4=1+3 9=1+3+5 16=1+3+5+7
  let x = 1;
  while (num > 0) {
    num = num - x;
    x += 2;
  }
  return num === 0;
};
// @lc code=end
