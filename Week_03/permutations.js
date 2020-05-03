/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let ans = [];
  let n = nums.length;
  const backtrack = (first) => {
    if (first === n) {
      return ans.push([...nums]);
    }

    for (let i = first; i < nums.length; i++) {
      [nums[first], nums[i]] = [nums[i], nums[first]];
      backtrack(first + 1);
      [nums[i], nums[first]] = [nums[first], nums[i]];
    }
  };
  backtrack(0);
  return ans;
};
