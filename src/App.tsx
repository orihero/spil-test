import { useEffect, useRef } from "react";
import { io } from "socket.io-client";
import "./styles.css";

export default function App() {
  const socket = useRef(
    io(
      "wss://spil-socket.four-seasons.uz?token=7NJuSfpecAOJRoJyIbelHyaXHivmKvUI",
      { transports: ["websocket"] }
    )
  ).current;
  useEffect(() => {
    socket.connect();
    socket.onAny((e) => {
      console.log(e);
    });
  }, [socket]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
