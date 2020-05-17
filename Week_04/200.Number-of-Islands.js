/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let counter = 0;
  const findLand = (curX, curY) => {
    if (grid[curY][curX + 1] === "1") {
      grid[curY][curX + 1] = "0";
      findLand(curX + 1, curY);
    }

    if (grid[curY][curX - 1] === "1") {
      grid[curY][curX - 1] = "0";
      findLand(curX - 1, curY);
    }

    if (grid[curY + 1] && grid[curY + 1][curX] === "1") {
      grid[curY + 1][curX] = "0";
      findLand(curX, curY + 1);
    }

    if (grid[curY - 1] && grid[curY - 1][curX] === "1") {
      grid[curY - 1][curX] = "0";
      findLand(curX, curY - 1);
    }
  };
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "1") {
        counter++;
        findLand(x, y);
      }
    }
  }
  return counter;
};
