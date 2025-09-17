import type React from "react";
import type { JSX } from "react";

type RollDiceBtnProps = {
    isGameWon: boolean,
    buttonRef: React.RefObject<HTMLButtonElement | null>,
    rollDice: () => void
}

const RollDiceBtn = ({ isGameWon, rollDice, buttonRef }: RollDiceBtnProps): JSX.Element => {
  return (
    <button ref={buttonRef} className="roll-dice" onClick={rollDice}>
      {isGameWon ? "New Game" : "Roll"}
    </button>
  );
};

export default RollDiceBtn;
