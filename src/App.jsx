import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="easy" timerTarget={1} />
        <TimerChallenge title="not easy" timerTarget={5} />
        <TimerChallenge title="getting tough" timerTarget={10} />
        <TimerChallenge title="only props" timerTarget={15} />
      </div>
    </>
  );
}

export default App;
