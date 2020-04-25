/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] !== undefined ? hash[s[i]]++ : (hash[s[i]] = 1);
    hash[t[i]] !== undefined ? hash[t[i]]-- : (hash[t[i]] = -1);
  }
  for (const x in hash) {
    if (hash[x] !== 0) {
      return false;
    }
  }
  return true;
};
