import logo from "./logo.svg";
import "./App.css";

function Greeting({ id, name }) {
  return (
    <div>
      <h2>Welcome to Fullstack Development - I</h2>
      <p>React JS Programming Week09 Lab Exercise</p>
      <p>{id}</p>
      <p>{name}</p>
      <p>George Brown College, Toronto</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting id="101497831" name="Fellipe C.T De Camargo" />
      </header>
    </div>
  );
}

export default App;
