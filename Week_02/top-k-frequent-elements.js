/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let hash = new Map();
  let bucket = new Array(nums.length + 1);
  let res = [];
  // count each number's fequency
  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
      let temp = hash.get(nums[i]);
      hash.set(nums[i], temp + 1);
    } else {
      hash.set(nums[i], 1);
    }
  }
  // put number in array based on there fequency
  for (let j of hash.keys()) {
    let f = hash.get(j);
    if (bucket[f] !== undefined) {
      bucket[f].push(j);
    } else {
      bucket[f] = [j];
    }
  }
  // take k most frequency number out
  for (let x = bucket.length - 1; x >= 0 && res.length < k; x--) {
    if (bucket[x] !== undefined) {
      res.push(...bucket[x]);
    }
  }
  return res;
};
