/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  let wordLength = beginWord.length;
  let wordMap = new Set();
  let chars = new Array(wordLength).fill(new Set());
  for (let x of wordList) {
    if (x !== beginWord) {
      wordMap.add(x);
      let wordArr = x.split("");
      for (let i in wordArr) {
        if (!chars[i].has(wordArr[i])) {
          chars[i].add(wordArr[i]);
        }
      }
    }
  }
  let visited = new Set();

  if (!wordMap.has(endWord)) return 0;

  let queue = [beginWord];
  let level = 1;
  while (queue.length !== 0) {
    if (queue.findIndex((x) => x === endWord) !== -1) return level;
    let subQueue = [];
    for (let w of queue) {
      let wordArr = w.split("");
      for (let i = 0; i < wordLength; i++) {
        let old = wordArr[i];
        chars[i].forEach((x) => {
          wordArr[i] = x;
          let newStr = wordArr.join("");
          if (wordMap.has(newStr) && !visited.has(newStr)) {
            subQueue.push(newStr);
            visited.add(newStr);
          }
        });
        wordArr[i] = old;
      }
    }
    queue = subQueue;
    level++;
  }
  return 0;
};