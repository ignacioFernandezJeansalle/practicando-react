import { useState, useEffect } from "react";
import { INITIAL_VALUES, TURNS } from "./constants";
import { checkWinner, checkEndGame } from "./logic/game";
import { saveGameToLocalStorage, loadGameFromLocalStorage, resetGameFromLocalStorage } from "./logic/local-storage";
import Square from "./components/Square";
import WinnerModal from "./components/WinnerModal";

export default function App() {
  const [board, setBoard] = useState(INITIAL_VALUES.board);
  const [turn, setTurn] = useState(INITIAL_VALUES.turn);
  const [winner, setWinner] = useState(INITIAL_VALUES.winner);

  useEffect(() => {
    const { board, turn } = loadGameFromLocalStorage();
    if (board && turn) {
      setBoard(board);
      setTurn(turn);
    }
  }, []);

  const resetGame = () => {
    setBoard(INITIAL_VALUES.board);
    setTurn(INITIAL_VALUES.turn);
    setWinner(INITIAL_VALUES.winner);
    resetGameFromLocalStorage();
  };

  const updateBoard = (index) => {
    // Si la casilla ya está ocupada, no hacer nada
    if (board[index] || winner) return;

    // Actualizar el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // Verificar si hay un ganador
    const isWinner = checkWinner(newBoard, turn);
    if (isWinner) {
      setWinner(turn);
      return;
    } else if (checkEndGame(newBoard)) {
      setWinner(false); // Empate
      return;
    }

    // Cambiar de turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // Guardar el juego
    saveGameToLocalStorage({ board: newBoard, turn: newTurn });
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
      <section className="reset">
        <button onClick={resetGame}>Reiniciar juego</button>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  );
}
