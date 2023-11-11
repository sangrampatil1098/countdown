import React, { useImperativeHandle, useRef } from "react";
import ReactDOM from "react-dom";
const ResultModal = React.forwardRef(
  ({ targetTime, timeRemaining, handleReset, setTimeRemaining }, ref) => {
    const dialogRef = useRef();
    const formattedTimeRemaining = (timeRemaining / 1000).toFixed(2);
    const userLost = timeRemaining <= 0;
    const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
      return {
        open() {
          dialogRef.current.showModal();
        },
      };
    });

    return ReactDOM.createPortal(
      <dialog className="result-modal" ref={dialogRef}>
        {userLost && <h2>You lost!</h2>}
        {!userLost && <h2>Your score {score}</h2>}
        <p>
          The target time was <strong> {targetTime} seconds</strong>
        </p>
        <p>
          You stopped the timer with{" "}
          <strong>{formattedTimeRemaining} seconds </strong> left.
        </p>

        <form method="dialogue">
          <button onClick={handleReset}>Close</button>
        </form>
      </dialog>,
      document.getElementById("modal")
    );
  }
);

export default ResultModal;
