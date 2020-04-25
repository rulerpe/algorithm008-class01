/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let table = new Map();
  for (let i = 0; i < strs.length; i++) {
    let key = strs[i].split("").sort().join("");
    if (table.has(key)) {
      let temp = table.get(key);
      temp.push(strs[i]);
      table.set(key, temp);
    } else {
      table.set(key, [strs[i]]);
    }
  }
  return [...table.values()];
};
