import React from "react";
import { Scene, Entity } from "aframe-react";
import cake1 from "../images/cake.gltf";
const Cake = () => {
  return (
    //   <a-cylinder
    //     position="-2 0.25 0"
    //     radius="0.5"
    //     height="0.3"
    //     color="#AAC65D"
    //   />
    // <Entity
    //   geometry={{ primitive: "box" }}
    //   material={{ color: "red" }}
    //   position={{ x: 0, y: 0, z: -5 }}
    // />

    // <Entity
    //   id="cake"
    //   scale="16 12"
    //   position={{ x: 5.8, y: 0.3, z: -2.2 }}
    //   text={{ value: "Hello, WebVR!", color: "#7711AA" }}
    //   gltf-model="../images/cake.gltf"
    // />
    <a-assets>
      <a-asset-item id="mod" src="../images/cake.gltf"></a-asset-item>
    </a-assets>
    // <a-entity gltf-model={cake1}></a-entity>
    //   <a-asset-item
    //     id="test"
    //     src="url(src/component/images/cake.glft)"
    //     scale="0.2 0.2 0.2"
    //   />
  );
};

export default Cake;
