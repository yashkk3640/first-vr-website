import React from "react";
import { Scene, Entity } from "aframe-react";
// import "../style/vr_main.scss";
// import Cake from "./cake";
const StartVR = () => {
  return (
    <a-scene>
      <a-assets>
        <a-asset-item
          id="skull-model"
          src="https://dl.dropboxusercontent.com/s/dvahjq5trg9pysj/evil-skull.gltf"
          crossOrigin="anonymous"
        ></a-asset-item>
      </a-assets>
      <a-gltf-model src="#skull-model" position="0 2 -3"></a-gltf-model>
      {/* <a-assets>
        <a-asset-item
          id="cake"
          response-type="arraybuffer"
          src="../images/cake.gltf"
        ></a-asset-item>
        <a-asset-item
          id="man"
          response-type="arraybuffer"
          src="../images/finalBaseMesh.glb"
        ></a-asset-item>
      </a-assets>
      <a-gltf-model
        id="myCake"
        src="#cake"
        scale="100 10 10"
        position="1 0.75 -3"
      ></a-gltf-model> */}
    </a-scene>
  );
  // return (
  //   <Scene>
  //     <Entity
  //       scale="16 12"
  //       position={{ x: 5.8, y: 0.3, z: -2.2 }}
  //       text={{ value: "Hello, WebVR!", color: "#7711AA" }}
  //     />
  //     <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
  //     <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
  //     <a-cylinder
  //       position="1 0.75 -3"
  //       radius="0.5"
  //       height="1.5"
  //       text={{ value: "cylinder" }}
  //       color="#FFC65D"
  //     />
  //     <a-plane
  //       position="0 0 -4"
  //       rotation="-90 0 0"
  //       width="4"
  //       height="4"
  //       color="#7BC8A4"
  //     />
  //     <Cake />
  //     <Entity id="cake" gltfModel="../images/cake.gltf" />
  //     <model-viewer
  //       src="../images/cake.glb"
  //       auto-rotate
  //       camera-controls
  //       alt="cake"
  //       background-color="#455A64"
  //     />
  //     <a-sky color="#ECECEC" />
  //   </Scene>
  // );
};

export default StartVR;
