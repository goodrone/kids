import React from 'react';
import './Flip.css';

function Flip({ front, back }) {
  const [isFront, setIsFront] = React.useState(true);
  const rotate = () => setIsFront(!isFront);
  return (
    <div className={"flip-container " + (isFront ? "" : "back")} onClick={rotate}>
      <div className="flip-inner">
        <div className="flip-front">{front}</div>
        <div className="flip-back">{back}</div>
      </div>
    </div>
  );
}

export default Flip;
