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
          <li>You are the 'X', the knife is the 'K'</li>
          <li>Three moves per turn</li>
          <li>Turns alternate between you and the knife</li>
          <li>Can only move in direction shown by flashlight</li>
          <li>Takes one turn to point flashlight in other direction</li>
          <li>Knife's location will be displayed if seen in flashlight</li>
          <li>Takes one turn to point flashlight in reverse direction</li>
          {/* <li>Reverse-reverse-move can put up road-block</li>
          <li>Move-reverse-reverse needed to remove road-block</li> */}
          <li>Stay-stay-stay shows location of knife</li>
          <li>Game Over when knife lands on your location</li>
          <li>Knife always knows your location</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
