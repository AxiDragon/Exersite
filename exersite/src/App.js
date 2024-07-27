import './App.css';

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
          <button class="workout-button">
            <div class="workout-name">Pushup</div>
            <div class="counter"></div>
          </button>
          <button class="workout-button">Squat</button>
          <button class="workout-button">Weightlift</button>
        </div>
      </header>
    </div>
  );
}

export default App;
