import './App.css';
import ExerciseButton from './components/ExerciseButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Exersite</h1>
        <div>
          <p>Points</p>
          <p>3</p>
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
