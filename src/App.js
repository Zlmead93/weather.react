
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
       <Weather />
        <a
          className="App-link"
          href="https://github.com/Zlmead93/weather.react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </header>
    </div>
  );
}

export default App;
