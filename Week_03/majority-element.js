/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
      hash.set(nums[i], hash.get(nums[i]) + 1);
    } else {
      hash.set(nums[i], 1);
    }
  }
  let majority = ["", 0];
  for (let item of hash.entries()) {
    if (item[1] > majority[1]) {
      majority = item;
    }
  }
  return majority[0];
};
