/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums === null || nums.length === 0) return;
  let counter = 0;
  for (let num of nums) {
    if (num !== 0) nums[counter++] = num;
  }
  while (counter < nums.length) {
    nums[counter++] = 0;
  }
};
