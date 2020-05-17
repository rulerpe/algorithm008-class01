/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 *
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (44.42%)
 * Likes:    1857
 * Dislikes: 218
 * Total Accepted:    410.9K
 * Total Submissions: 923.3K
 * Testcase Example:  '[3,4,5,1,2]'
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown
 * to you beforehand.
 *
 * (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
 *
 * Find the minimum element.
 *
 * You may assume no duplicate exists in the array.
 *
 * Example 1:
 *
 *
 * Input: [3,4,5,1,2]
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 * Input: [4,5,6,7,0,1,2]
 * Output: 0
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let lo = 0;
  let hi = nums.length - 1;
  let mid = 0;

  while (lo < hi) {
    if (nums[lo] < nums[hi]) return nums[lo];
    if (hi - lo === 1) {
      return nums[lo] < nums[hi] ? nums[lo] : nums[hi];
    }
    mid = Math.floor((lo + hi) / 2);
    if (nums[hi] < nums[mid]) {
      lo = mid;
    } else if (nums[lo] > nums[mid]) {
      hi = mid;
    }
  }
  return nums[mid] < nums[lo] ? nums[mid] : nums[lo];
};
// @lc code=end
