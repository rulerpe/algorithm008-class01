/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let table = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (table.has(nums[i])) return [table.get(nums[i]), i];
    let diff = target - nums[i];
    table.set(diff, i);
  }
};
