/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits === "") return [];
  let ans = [];
  let digitArray = digits.split("");
  let n = digits.length;
  let numCharTable = [
    [],
    [],
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"],
  ];
  const helper = (currIndex, arr) => {
    if (arr.length === n) {
      return ans.push(arr.join(""));
    }
    for (let char of numCharTable[digitArray[currIndex]]) {
      arr.push(char);
      helper(currIndex + 1, arr);
      arr.pop();
    }
  };
  helper(0, []);
  return ans;
};
