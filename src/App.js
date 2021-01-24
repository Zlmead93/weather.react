
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <Weather defaultCity="London"/>
      </header>
       <a className="App-link"
          href="https://github.com/Zlmead93/weather.react"
          target="_blank"
          rel="noopener noreferrer"
        ><small> Coded by ZLM - Github </small></a>
      </div>
    </div>
  );
}

export default App;
