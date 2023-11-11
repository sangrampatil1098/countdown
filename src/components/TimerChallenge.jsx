import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, timerTarget }) => {
  const [timeRemaining, setTimeRemaining] = useState(timerTarget * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < timerTarget * 1000;

  const timer = useRef();
  const dialogRef = useRef();
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialogRef.current.open();
  }

  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);
  };

  const handleStop = () => {
    clearInterval(timer.current);
    dialogRef.current.open();
  };

  const handleReset = () => {
    setTimeRemaining(targetTime);
  };

  return (
    <>
      <ResultModal
        result="won"
        targetTime={timerTarget}
        ref={dialogRef}
        timeRemaining={timeRemaining}
        setTimeRemaining={setTimeRemaining}
        handleReset={handleReset}
      />

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {timerTarget} second{timerTarget > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {" "}
          {timerIsActive ? "Timer is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
