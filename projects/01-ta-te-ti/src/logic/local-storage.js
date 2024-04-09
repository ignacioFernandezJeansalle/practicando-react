export const saveGameToLocalStorage = ({ board, turn }) => {
  window.localStorage.setItem("board", JSON.stringify(board));
  window.localStorage.setItem("turn", turn);
};

export const loadGameFromLocalStorage = () => {
  const loadBoard = window.localStorage.getItem("board");
  const board = loadBoard ? JSON.parse(loadBoard) : null;

  const loadTurn = window.localStorage.getItem("turn");
  const turn = loadTurn ? parseInt(loadTurn) : null;

  return { board, turn };
};

export const resetGameFromLocalStorage = () => {
  window.localStorage.removeItem("board");
  window.localStorage.removeItem("turn");
};
