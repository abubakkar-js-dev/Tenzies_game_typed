import type { JSX } from "react";

type RollDiceBtnProps = {
    isGameWon: boolean;
    rollDice: () => void
}

const RollDiceBtn = ({ isGameWon, rollDice, buttonRef }):JSX.Element => {
  return (
    <button ref={buttonRef} className="roll-dice" onClick={rollDice}>
      {isGameWon ? "New Game" : "Roll"}
    </button>
  );
};

export default RollDiceBtn;
