import Confetti from "react-confetti";
import type { JSX } from "react";

const GameWon = ({ isGameWon }: { isGameWon: boolean }): JSX.Element => {
  return (
    <>
      {isGameWon && <Confetti />}
      <div aria-live="polite" className="sr-only">
        {isGameWon && (
          <p>Congratulations! You won! Press "New Game" to start again.</p>
        )}
      </div>
    </>
  );
};

export default GameWon;
