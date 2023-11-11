import { useRef, useState } from "react";

export default function Player() {
  const [userName, setUserName] = useState();
  const userNameRef = useRef();
  const handleClick = (e) => {
    setUserName(userNameRef.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {userName ?? "unknown entity"} </h2>
      <p>
        <input type="text" ref={userNameRef} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
