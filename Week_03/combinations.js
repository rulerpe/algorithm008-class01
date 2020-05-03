/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let ans = [];
  let backTrack = (first, curr) => {
    if (curr.length === k) {
      ans.push([...curr]);
      return;
    }

    for (let i = first; i < n + 1; i++) {
      curr.push(i);
      backTrack(i + 1, curr);
      curr.pop();
    }
  };
  backTrack(1, []);

  return ans;
};
