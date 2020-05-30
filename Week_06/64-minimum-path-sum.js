/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 *
 * https://leetcode.com/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (53.14%)
 * Likes:    2776
 * Dislikes: 56
 * Total Accepted:    402.5K
 * Total Submissions: 752.2K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * Given a m x n grid filled with non-negative numbers, find a path from top
 * left to bottom right which minimizes the sum of all numbers along its path.
 *
 * Note: You can only move either down or right at any point in time.
 *
 * Example:
 *
 *
 * Input:
 * [
 * [1,3,1],
 * ⁠ [1,5,1],
 * ⁠ [4,2,1]
 * ]
 * Output: 7
 * Explanation: Because the path 1→3→1→1→1 minimizes the sum.
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  // bottom up
  let n = grid.length;
  let m = grid[0].length;
  let dp = new Array(n + 1);
  for (let i = 0; i < n + 1; i++) {
    dp[i] = new Array(m + 1).fill(+Infinity);
  }
  dp[n - 1][m - 1] = grid[n - 1][m - 1];
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      if (i == n - 1 && j == m - 1) continue;
      dp[i][j] = grid[i][j] + Math.min(dp[i + 1][j], dp[i][j + 1]);
    }
  }
  return dp[0][0];
};
// @lc code=end
