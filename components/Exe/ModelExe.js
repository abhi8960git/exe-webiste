import React, { useRef } from "react";
import { Canvas,useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei"

export function ModelExe(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/exe.glb");
  const { actions } = useAnimations(animations, group);
  // useFrame(({ clock }) => {
  //   group.current.rotation.y = Math.sin(clock.elapsedTime) * 0.9;
  // });
  useFrame((state, delta) => {
    group.current.rotation.y += 1 * delta;
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Cube"
          position={[-0.03, 0, 0]}
          scale={[1.49, 1.29, 1.29]}
        />
        <group
          name="Empty"
          position={[-0.03, -0.54, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group name="Plane002">
          <mesh
            name="Plane002_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane002_1.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            name="Plane002_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane002_2.geometry}
            material={materials["Material.003"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/exe.glb");