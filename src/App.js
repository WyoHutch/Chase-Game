import React from "react";
import "./App.css";
import Board from "./board";
import PlayerForm from "./playerForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Chase Game
        <div className="PlayerForm">
          <PlayerForm />
        </div>
      </header>
      <Board />
      <div className="rules">
        <h2>Rules</h2>
        <ol>
          <li>Knife always knows your location</li>
          <li>Three moves per turn</li>
          <li>Can only move in direction lit by flashlight</li>
          <li>Takes one turn to point flashlight in reverse direction</li>
          {/* <li>Reverse-reverse-move can put up road-block</li>
          <li>Move-reverse-reverse needed to remove road-block</li> */}
          <li>Stay-stay-stay shows location of knife</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
