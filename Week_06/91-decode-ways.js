/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 *
 * https://leetcode.com/problems/decode-ways/description/
 *
 * algorithms
 * Medium (23.98%)
 * Likes:    2440
 * Dislikes: 2648
 * Total Accepted:    378.9K
 * Total Submissions: 1.6M
 * Testcase Example:  '"12"'
 *
 * A message containing letters from A-Z is being encoded to numbers using the
 * following mapping:
 *
 *
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 *
 *
 * Given a non-empty string containing only digits, determine the total number
 * of ways to decode it.
 *
 * Example 1:
 *
 *
 * Input: "12"
 * Output: 2
 * Explanation: It could be decoded as "AB" (1 2) or "L" (12).
 *
 *
 * Example 2:
 *
 *
 * Input: "226"
 * Output: 3
 * Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2
 * 6).
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s[0] === "0") return 0;
  let pre = 1;
  let curr = 1;
  for (let i = 0; i < s.length; i++) {
    let tmp = curr;
    if (s[i] === "0") {
      if (s[i - 1] === "1" || s[i - 1] === "2") {
        curr = pre;
      } else {
        return 0;
      }
    } else if (
      s[i - 1] === "1" ||
      (s[i - 1] === "2" && s[i] >= "1" && s[i] <= "6")
    ) {
      curr = curr + pre;
    }
    pre = tmp;
  }
  return curr;
};
// @lc code=end
