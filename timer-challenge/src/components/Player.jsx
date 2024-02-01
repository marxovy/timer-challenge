import { useRef, useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("Unknown Entity");

  const nameRef = useRef();

  const handleClick = () => {
    setPlayerName(nameRef.current.value);
  };
  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input ref={nameRef} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
