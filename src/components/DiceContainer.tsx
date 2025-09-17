import type {JSX} from "react"

type DiceContainerProps = {
    diceElement: JSX.Element[];

}

const DiceContainer = ({ diceElements }: DiceContainerProps): JSX.Element => {
  return <div className="dice-container">{diceElements}</div>;
};

export default DiceContainer;
