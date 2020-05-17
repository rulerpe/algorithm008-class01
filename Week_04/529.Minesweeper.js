/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
  const checkBoard = (x, y) => {
    let mineCount = 0;
    if (board[x][y] === undefined) return;
    if (board[x][y] === "M") {
      board[x][y] = "X";
      return;
    } else if (board[x][y] === "E") {
      if (board[x][y + 1] === "M") mineCount++;
      if (board[x + 1] && board[x + 1][y + 1] === "M") mineCount++;
      if (board[x + 1] && board[x + 1][y] === "M") mineCount++;
      if (board[x + 1] && board[x + 1][y - 1] === "M") mineCount++;
      if (board[x][y - 1] === "M") mineCount++;
      if (board[x - 1] && board[x - 1][y - 1] === "M") mineCount++;
      if (board[x - 1] && board[x - 1][y] === "M") mineCount++;
      if (board[x - 1] && board[x - 1][y + 1] === "M") mineCount++;
      if (mineCount !== 0) {
        board[x][y] = mineCount.toString();
      } else {
        board[x][y] = "B";
        if (board[x][y + 1] === "E") checkBoard(x, y + 1);
        if (board[x + 1] && board[x + 1][y + 1] === "E")
          checkBoard(x + 1, y + 1);
        if (board[x + 1] && board[x + 1][y] === "E") checkBoard(x + 1, y);
        if (board[x + 1] && board[x + 1][y - 1] === "E")
          checkBoard(x + 1, y - 1);
        if (board[x][y - 1] === "E") checkBoard(x, y - 1);
        if (board[x - 1] && board[x - 1][y - 1] === "E")
          checkBoard(x - 1, y - 1);
        if (board[x - 1] && board[x - 1][y] === "E") checkBoard(x - 1, y);
        if (board[x - 1] && board[x - 1][y + 1] === "E")
          checkBoard(x - 1, y + 1);
      }
    } else {
      return;
    }
  };
  checkBoard(click[0], click[1]);
  return board;
};
