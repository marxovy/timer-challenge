import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

import "./index.css";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Advanced" targetTime={5} />
        <TimerChallenge title="Expert" targetTime={10} />
        <TimerChallenge title="Master" targetTime={15} />
      </div>
    </>
  );
}

export default App;
