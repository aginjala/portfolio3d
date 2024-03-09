import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import dragonScene from "../assets/3d/dragon.glb";

// Source: https://sketchfab.com/3d-models/dragon-flying-cycle-ae0831702eac462a9969ff4f8bd57710

const Dragon = () => {
    const dragonRef = useRef();

    // Load the 3D model and animations from the provided GLTF file
    const { scene, animations } = useGLTF(dragonScene);
  
    // Get access to the animations for the dragon
    const { actions } = useAnimations(animations, dragonRef);
  
    // Play the "Take 001" animation when the component mounts
    // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
    useEffect(() => {
      dragonRef.current.rotation.y = -3
      actions["Take 001"].play();
    }, []);
  
    useFrame(({ clock, camera }) => {
      // Update the Y position to simulate dragon flying-like motion using a sine wave
      dragonRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Check if the bird reached a certain endpoint relative to the camera
    if (dragonRef.current.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      dragonRef.current.rotation.y = 0;
    } else if (dragonRef.current.position.x < camera.position.x - 10) {
      // Change direction to forward and reset the bird's rotation
      dragonRef.current.rotation.y = 3;
    }

    // Update the X and Z positions based on the direction
    if (dragonRef.current.rotation.y === 0) {
      // Moving backward
      dragonRef.current.position.x -= 0.02;
      dragonRef.current.position.z += 0.02;
    } else {
      // Moving forward
      dragonRef.current.position.x += 0.02;
      dragonRef.current.position.z -= 0.02;
    }
    });

  return (
    // to create and display 3D objects
    <mesh ref={dragonRef} position={[-5, 2, 1]} scale={[0.75, 0.75, 0.75]}>
      // use the primitive element when you want to directly embed a complex 3D
      model or scene
      <primitive object={scene} />
    </mesh>
  );
}

export default Dragon;
