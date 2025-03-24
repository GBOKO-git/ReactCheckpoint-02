import logo from './logo.svg';
import './App.css';
import PlayersList from './playersList';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My second <code>project</code> with react.
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
      <PlayersList/>
    </div>
  );
}

export default App;
