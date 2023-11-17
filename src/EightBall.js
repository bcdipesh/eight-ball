import { useState } from "react";
import "./EightBall.css";

const EightBall = ({ answers }) => {
  const [color, setColor] = useState("black");
  const [message, setMessage] = useState("Think of a Question");

  /** Generates random fortune and sets up new color and message state.
   */

  const genFortune = () => {
    // Get a random number within the answers array index range.
    const randomIndex = Math.floor(Math.random() * answers.length);
    const answer = answers[randomIndex];

    setMessage(answer.msg);
    setColor(answer.color);
  };

  return (
    <div
      className="EightBall-ball"
      style={{ backgroundColor: color }}
      onClick={genFortune}
    >
      <span className="EightBall-message">{message}</span>
    </div>
  );
};

export default EightBall;
