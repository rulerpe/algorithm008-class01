/*
 * @lc app=leetcode id=874 lang=javascript
 *
 * [874] Walking Robot Simulation
 *
 * https://leetcode.com/problems/walking-robot-simulation/description/
 *
 * algorithms
 * Easy (34.56%)
 * Likes:    146
 * Dislikes: 696
 * Total Accepted:    16.6K
 * Total Submissions: 48K
 * Testcase Example:  '[4,-1,3]\n[]'
 *
 * A robot on an infinite grid starts at point (0, 0) and faces north.  The
 * robot can receive one of three possible types of commands:
 *
 *
 * -2: turn left 90 degrees
 * -1: turn right 90 degrees
 * 1 <= x <= 9: move forward x units
 *
 *
 * Some of the grid squares are obstacles.
 *
 * The i-th obstacle is at grid point (obstacles[i][0], obstacles[i][1])
 *
 * If the robot would try to move onto them, the robot stays on the previous
 * grid square instead (but still continues following the rest of the route.)
 *
 * Return the square of the maximum Euclidean distance that the robot will be
 * from the origin.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: commands = [4,-1,3], obstacles = []
 * Output: 25
 * Explanation: robot will go to (3, 4)
 *
 *
 *
 * Example 2:
 *
 *
 * Input: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
 * Output: 65
 * Explanation: robot will be stuck at (1, 4) before turning left and going to
 * (1, 8)
 *
 *
 *
 *
 *
 * Note:
 *
 *
 * 0 <= commands.length <= 10000
 * 0 <= obstacles.length <= 10000
 * -30000 <= obstacle[i][0] <= 30000
 * -30000 <= obstacle[i][1] <= 30000
 * The answer is guaranteed to be less than 2 ^ 31.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
  let current = [0, 0];
  // let dirs = ["N","E","S","W"]
  let direction = 0;
  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === -1) {
      direction = direction + 1;
      if (direction > 3) {
        direction = 4 % direction;
      }
    } else if (commands[i] === -2) {
      direction = direction - 1;
      if (direction < 0) {
        direction = 3;
      }
      console.log("dir", direction);
    } else {
      for (let j = 0; j < commands[i]; j++) {
        let nextPos = [...current];
        if (direction === 0) {
          nextPos[1] = current[1] + 1;
        } else if (direction === 1) {
          nextPos[0] = current[0] + 1;
        } else if (direction === 2) {
          nextPos[1] = current[1] - 1;
        } else if (direction === 3) {
          nextPos[0] = current[0] - 1;
        }
        let blocked = obstacles.findIndex(
          (o) => o[0] === nextPos[0] && o[1] == nextPos[1]
        );

        if (blocked !== -1) {
          current = [...nextPos];
        }
        console.log(current);
      }
    }
  }
  return current[0] * current[0] + current[1] * current[1];
};
// @lc code=end
