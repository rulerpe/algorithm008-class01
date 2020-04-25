/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  // priority queue
  let queue = [];
  let res = 1;
  let count = 0;
  queue.push(res);
  while (count < n) {
    res = queue.shift();
    while (queue.length !== 0 && queue[0] === res) {
      queue.shift();
    }
    count++;
    queue.push(res * 2);
    queue.push(res * 3);
    queue.push(res * 5);
    queue.sort((a, b) => a - b);
  }
  return res;
};
