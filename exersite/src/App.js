import './App.css';
import ExerciseButton from './components/ExerciseButton';
import React, { useState } from 'react';

function App() {
  const [points, setPoints] = useState(3);

  const handlePointsChange = (event) => {
    setPoints(event.detail);
  }

  window.addEventListener("pointsChange", handlePointsChange);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Exersite</h1>
        <div>
          <p>Points</p>
          <p>{points}</p>
        </div>
        <div id="button-container">
          <ExerciseButton name="Pushup" initialCount="0" />
          <ExerciseButton name="Squat" initialCount="0" />
          <ExerciseButton name="Weightlift" initialCount="0" />
        </div>
      </header>
    </div>
  );
}

export default App;
