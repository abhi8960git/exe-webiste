import React from "react";
import { Canvas } from "@react-three/fiber";
import { ModelExe } from "./ModelExe";
// import { DirectionalLight } from "three";
// import { DirectionalLight } from "three";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";



const Exe = () => {
    return (
        <div>
            <Canvas style={{ height: '200px' }}  >
                <ambientLight></ambientLight>
                {/* <PerspectiveCamera fov={0} /> */}
                <ModelExe/>

                <OrbitControls></OrbitControls>


            </Canvas>
        </div>
    )
}

export default Exe