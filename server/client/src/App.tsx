import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Landing } from "./components";

function App() {
  return (
    <div className="App">
      <Landing myProp="test" />
    </div>
  );
}

export default App;
