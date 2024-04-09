import "./WinnerModal.css";
import { TURNS } from "../constants";
import { XIcon, OIcon } from "./Icons";

export default function WinnerModal({ resetGame, winner }) {
  if (winner === null) return null;

  const result = winner ? "Ganador" : "Empate 😭";
  const icon = winner && (winner === TURNS.X ? <XIcon /> : <OIcon />);

  const handleClick = () => {
    resetGame();
  };

  return (
    <section className="modal">
      <div className="modal-content">
        <h2>{result}</h2>
        <span>{icon}</span>
        <button onClick={handleClick}>Volver a jugar</button>
      </div>
    </section>
  );
}
