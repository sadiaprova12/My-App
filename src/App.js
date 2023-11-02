import logo from './logo.svg';
import './App.css';

const number = 5555;
const singer = {name: 'Atif Islam', job:', Singer'}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
        <h3>Hello Dude,React. How are you?</h3>
        </div>
        <div className="music">
          <p>Number: {2222 + number}</p>
          <p>Singer: {singer.name} {singer.job}</p>
        </div>
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
