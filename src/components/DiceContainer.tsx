import type {JSX} from "react"



const DiceContainer = ({ diceElements }: {diceElements: JSX.Element[]}): JSX.Element => {
  return <div className="dice-container">{diceElements}</div>;
};

export default DiceContainer;
