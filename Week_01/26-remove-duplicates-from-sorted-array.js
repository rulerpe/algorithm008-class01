/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const numsLength = nums.length;
  if (numsLength < 2) return numsLength;
  let counter = 1;
  for (let i = 1; i < numsLength; ++i) {
    if (nums[i] != nums[i - 1]) nums[counter++] = nums[i];
  }
  return counter;
};
