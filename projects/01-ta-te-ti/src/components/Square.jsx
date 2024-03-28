import "./Square.css";
import { TURNS } from "../constants";
import { XIcon, OIcon } from "./Icons";

export default function Square({ index, value, updateBoard, isTurn }) {
  const className = `square ${isTurn ? "is-turn" : ""}`;

  const icon = value && (value === TURNS.X ? <XIcon /> : <OIcon />);

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div className={className} onClick={handleClick}>
      {icon}
    </div>
  );
}
