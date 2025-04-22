import logo from './logo.svg';
import './App.css';

function App() {
  MyVariable = 12 + 45
  
  return (
    <div className="App">
      <header className="App-header">
        <div> {MyVariable} </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
