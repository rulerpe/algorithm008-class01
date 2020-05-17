/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 *
 * https://leetcode.com/problems/jump-game-ii/description/
 *
 * algorithms
 * Hard (30.03%)
 * Likes:    2228
 * Dislikes: 124
 * Total Accepted:    243.7K
 * Total Submissions: 809.4K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * Given an array of non-negative integers, you are initially positioned at the
 * first index of the array.
 *
 * Each element in the array represents your maximum jump length at that
 * position.
 *
 * Your goal is to reach the last index in the minimum number of jumps.
 *
 * Example:
 *
 *
 * Input: [2,3,1,1,4]
 * Output: 2
 * Explanation: The minimum number of jumps to reach the last index is 2.
 * ⁠   Jump 1 step from index 0 to 1, then 3 steps to the last index.
 *
 * Note:
 *
 * You can assume that you can always reach the last index.
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let maxPos = 0;
  let end = 0;
  let step = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxPos = Math.max(maxPos, nums[i] + i);
    if (i === end) {
      end = maxPos;
      step++;
    }
  }
  return step;
};
// @lc code=end
