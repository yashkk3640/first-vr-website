import React, { useState } from "react";
import "aframe";
// import "aframe-particle-system-component";
import VRScene from "./components/VR";
// import "./style/app.scss";

const App = () => {
  const [vrMode, setVrMode] = useState(true);
  return <VRScene />;
  return (
    <div className="App">
      <header className="App-header">
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
        <button onClick={() => setVrMode(true)}>Start Virtual Reality</button>
        {vrMode && <VRScene />}
      </header>
    </div>
  );
};

export default App;
