import React from "react";
import { Canvas } from "@react-three/fiber";
import { ModelExe } from "./ModelExe";
// import { DirectionalLight } from "three";
// import { DirectionalLight } from "three";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";



const Exe = (props) => {
    return (
        <div>
            <Canvas  style={{ height: '200px', width:"200px" }} camera={{fov: 40, zoom: 1, near: 1, far: 1500}}  >
                <ambientLight></ambientLight>
                {/* <PerspectiveCamera fov={0} /> */}
                <ModelExe/>

                <OrbitControls></OrbitControls>


            </Canvas>
        </div>
    )
}

export default Exe