import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, changeData] = useState([]);
  useEffect(() => {
    console.log("fetch");
    const url = `http://localhost:1323/ping`;
    fetch(url)
      .then((res) => res.text())
      .then((res) => {
        changeData(res);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
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
        <p>{data}</p>
      </header>
    </div>
  );
}

export default App;
