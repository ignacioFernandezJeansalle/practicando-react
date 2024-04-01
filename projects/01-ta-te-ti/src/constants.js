export const TURNS = {
  X: 1,
  O: 2,
};

export const INITIAL_VALUES = {
  board: Array(9).fill(null),
  turn: TURNS.X,
  winner: null,
};

export const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
