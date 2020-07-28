import React, { useState, useEffect } from "react";
import MenuBar from "./component/MenuBar.js";
import logo from "./logo.svg";
import "./App.css";

import { Button } from "@material-ui/core";

function App() {
  const [data, changeData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const url = `http://localhost:1323/ping`;
      const res = await fetch(url);
      const text = await res.text();
      changeData(text);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <MenuBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{data}</p>
      </header>

      <Button color="primary">Hello World</Button>
    </div>
  );
}

export default App;
