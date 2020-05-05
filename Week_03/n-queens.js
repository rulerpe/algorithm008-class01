/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let cols = new Array(n).fill(0);
  let diff = new Array(2 * (n - 1)).fill(0);
  let com = new Array(2 * (n - 1)).fill(0);
  let ans = [];
  let queens = new Array(n).fill(null);

  const can_place = (row, col) => {
    return cols[col] !== 1 && diff[row - col] !== 1 && com[row + col] !== 1;
  };

  const place_queen = (row, col) => {
    cols[col] = 1;
    diff[row - col] = 1;
    com[row + col] = 1;
    queens[row] = col;
  };

  const remove_queen = (row, col) => {
    cols[col] = 0;
    diff[row - col] = 0;
    com[row + col] = 0;
    queens[row] = null;
  };

  const add_solution = () => {
    let solution = [];
    for (let x of queens) {
      let curRow = new Array(n).fill(".");
      curRow[x] = "Q";
      solution.push(curRow.join(""));
    }
    ans.push(solution);
  };

  const helper = (row = 0) => {
    for (let i = 0; i < n; i++) {
      if (can_place(row, i)) {
        place_queen(row, i);
        if (row + 1 === n) {
          add_solution();
        } else {
          helper(row + 1);
        }
        remove_queen(row, i);
      }
    }
  };
  helper();
  return ans;
};
