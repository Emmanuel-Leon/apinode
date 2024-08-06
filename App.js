import logo from './logo.svg';
import './App.css';
import Component from './Component';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
       Welcome to the jungle!!!.

        </p>
        <p>En esta seccion debemos implementar <br/>
        una tecnica de programacion
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn to cook crack!!!
        </a>
	<Component/>
      </header>
    </div>
  );
}

export default App;
