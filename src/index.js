// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

import "aframe";
import "aframe-particle-system-component";
import { Entity, Scene } from "aframe-react";
import React from "react";
import ReactDOM from "react-dom";

class VRScene extends React.Component {
  render() {
    return (
      <Scene>
        {/* <Entity
          geometry={{ primitive: "box" }}
          material={{ color: "red" }}
          position={{ x: 0, y: 0, z: -5 }}
        /> */}
        <Entity particle-system={{ preset: "snow" }} />
        {/* <Entity light={{ type: "point" }} /> */}
        <Entity gltf-model={{ src: "../src/components/images/cake.gltf" }} />
        <Entity text={{ value: "Hello, WebVR!" }} />
      </Scene>
    );
  }
}

ReactDOM.render(<VRScene />, document.getElementById("root"));
