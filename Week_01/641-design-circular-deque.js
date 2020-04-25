/*
 * @lc app=leetcode id=641 lang=javascript
 *
 * [641] Design Circular Deque
 *
 * https://leetcode.com/problems/design-circular-deque/description/
 *
 * algorithms
 * Medium (51.28%)
 * Likes:    190
 * Dislikes: 38
 * Total Accepted:    13.6K
 * Total Submissions: 26.5K
 * Testcase Example:  '["MyCircularDeque","insertLast","insertLast","insertFront","insertFront","getRear","isFull","deleteLast","insertFront","getFront"]\n[[3],[1],[2],[3],[4],[],[],[],[4],[]]'
 *
 * Design your implementation of the circular double-ended queue (deque).
 *
 * Your implementation should support following operations:
 *
 *
 * MyCircularDeque(k): Constructor, set the size of the deque to be k.
 * insertFront(): Adds an item at the front of Deque. Return true if the
 * operation is successful.
 * insertLast(): Adds an item at the rear of Deque. Return true if the
 * operation is successful.
 * deleteFront(): Deletes an item from the front of Deque. Return true if the
 * operation is successful.
 * deleteLast(): Deletes an item from the rear of Deque. Return true if the
 * operation is successful.
 * getFront(): Gets the front item from the Deque. If the deque is empty,
 * return -1.
 * getRear(): Gets the last item from Deque. If the deque is empty, return
 * -1.
 * isEmpty(): Checks whether Deque is empty or not.
 * isFull(): Checks whether Deque is full or not.
 *
 *
 *
 *
 * Example:
 *
 *
 * MyCircularDeque circularDeque = new MycircularDeque(3); // set the size to
 * be 3
 * circularDeque.insertLast(1);            // return true
 * circularDeque.insertLast(2);            // return true
 * circularDeque.insertFront(3);            // return true
 * circularDeque.insertFront(4);            // return false, the queue is full
 * circularDeque.getRear();              // return 2
 * circularDeque.isFull();                // return true
 * circularDeque.deleteLast();            // return true
 * circularDeque.insertFront(4);            // return true
 * circularDeque.getFront();            // return 4
 *
 *
 *
 *
 * Note:
 *
 *
 * All values will be in the range of [0, 1000].
 * The number of operations will be in the range of [1, 1000].
 * Please do not use the built-in Deque library.
 *
 *
 */

// @lc code=start
/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.arr = new Array(k);
  this.arrLength = k;
  this.front = k - 1;
  this.rear = 0;
  this.count = 0;
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.count === this.arrLength) {
    return false;
  }
  this.arr[this.front] = value;
  this.front = (this.front - 1 + this.arrLength) % this.arrLength;
  this.count++;
  return true;
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.count === this.arrLength) {
    return false;
  }
  this.arr[this.rear] = value;
  this.rear = (this.rear + 1) % this.arrLength;
  this.count++;
  return true;
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.count === 0) {
    return false;
  }
  this.front = (this.front + 1) % this.arrLength;
  this.count--;
  return true;
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.count === 0) {
    return false;
  }
  this.rear = (this.rear - 1 + this.arrLength) % this.arrLength;
  this.count--;
  return true;
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.count === 0) {
    return -1;
  }
  return this.arr[(this.front + 1) % this.arrLength];
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.count === 0) {
    return -1;
  }
  return this.arr[(this.rear - 1 + this.arrLength) % this.arrLength];
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.count === 0;
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.count === this.arrLength;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
// @lc code=end
