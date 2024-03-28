import { useState } from "react";
import { TURNS, WINNING_COMBINATIONS } from "./constants";
import Square from "./components/Square";

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    // Si la casilla ya está ocupada, no hacer nada
    if (board[index] || winner) return;

    // Actualizar el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // Verificar si hay un ganador
    const isWinner = WINNING_COMBINATIONS.some((combination) => combination.every((index) => newBoard[index] === turn));
    if (isWinner) {
      setWinner(turn);
      return;
    }

    // Cambiar de turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
  };

  return (
    <main className="main">
      <h1>TA TE TI</h1>
      <h2>Suerte para mi 😁</h2>
      <section className="board">
        {board.map((value, index) => (
          <Square key={index} index={index} value={value} updateBoard={updateBoard} />
        ))}
      </section>

      <h3>¿A quién le toca?</h3>
      <section className="turn">
        <Square value={TURNS.X} isTurn={turn === TURNS.X} />
        <Square value={TURNS.O} isTurn={turn === TURNS.O} />
      </section>
    </main>
  );
}
