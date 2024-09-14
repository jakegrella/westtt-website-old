'use client';

import { Canvas } from '@react-three/fiber';
import { Submarine } from './Submarine';

const LandingCanvas = () => {
  return (
    <Canvas>
      <ambientLight />
      <Submarine />
    </Canvas>
  );
};

export { LandingCanvas };
