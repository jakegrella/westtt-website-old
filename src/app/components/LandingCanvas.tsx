'use client';

import { Canvas } from '@react-three/fiber';
import { Submarine } from './Submarine';
import { ReactLenis, useLenis } from '../libs/lenis';
import { Scroll, ScrollControls } from '@react-three/drei';

const LandingCanvas = () => {
  const lenis = useLenis(({ scroll }) => {
    // console.log('scroll', Math.floor(scroll))
  });

  return (
    // <div className='absolute top-0 left-0 w-screen h-[400vh] -z-[-3]'>
    <div className='fixed top-0 left-0 w-screen h-screen -z-[1]'>
      {/* <ReactLenis root> */}
      <Canvas
        orthographic
        camera={{ zoom: 80 }}
        gl={{ alpha: false, antialias: false, stencil: false, depth: false }}
        dpr={[1, 1.5]}
      >
        <ambientLight />
        <ScrollControls>
          <Submarine position={[0, 1, 0]} />
          {/* <Scroll> */}
          {/* </Scroll> */}
        </ScrollControls>
      </Canvas>
      {/* </ReactLenis> */}
    </div>
  );
};

export { LandingCanvas };
