/*
 * @lc app=leetcode id=208 lang=javascript
 *
 * [208] Implement Trie (Prefix Tree)
 *
 * https://leetcode.com/problems/implement-trie-prefix-tree/description/
 *
 * algorithms
 * Medium (45.06%)
 * Likes:    2989
 * Dislikes: 48
 * Total Accepted:    306.3K
 * Total Submissions: 640.3K
 * Testcase Example:  '["Trie","insert","search","search","startsWith","insert","search"]\n[[],["apple"],["apple"],["app"],["app"],["app"],["app"]]'
 *
 * Implement a trie with insert, search, and startsWith methods.
 *
 * Example:
 *
 *
 * Trie trie = new Trie();
 *
 * trie.insert("apple");
 * trie.search("apple");   // returns true
 * trie.search("app");     // returns false
 * trie.startsWith("app"); // returns true
 * trie.insert("app");
 * trie.search("app");     // returns true
 *
 *
 * Note:
 *
 *
 * You may assume that all inputs are consist of lowercase letters a-z.
 * All inputs are guaranteed to be non-empty strings.
 *
 *
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */

class Node {
  constructor() {
    this.is_string = false;
    this.next = Array(26).fill(null);
  }
}

var Trie = function () {
  this.root = new Node();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let = this.root;
  const aCode = 97;
  for (c of word) {
    const cCode = c.charCodeAt();
    if (tempRoot.next[cCode - aCode] === null)
      tempRoot.next[cCode - aCode] = new Node();
    tempRoot = tempRoot.next[cCode - aCode];
  }
  tempRoot.is_string = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let tempRoot = this.root;
  const aCode = 97;
  for (c of word) {
    const cCode = c.charCodeAt();
    if (tempRoot.next[cCode - aCode] === null) return false;
    tempRoot = tempRoot.next[cCode - aCode];
  }
  return tempRoot.is_string;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let tempRoot = this.root;
  const aCode = 97;
  for (c of prefix) {
    const cCode = c.charCodeAt();
    if (tempRoot.next[cCode - aCode] === null) return false;
    tempRoot = tempRoot.next[cCode - aCode];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
