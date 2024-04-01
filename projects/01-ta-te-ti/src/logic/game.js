import { WINNING_COMBINATIONS } from "../constants";

export const checkWinner = (board, turn) => {
  return WINNING_COMBINATIONS.some((combination) => combination.every((index) => board[index] === turn));
};

export const checkEndGame = (board) => {
  return board.every((value) => value !== null);
};
