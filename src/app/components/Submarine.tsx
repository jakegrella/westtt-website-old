'use client';

import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

const Submarine = (props: any) => {
  const ref = useRef(null);
  const data = useScroll();
  const [scale, setScale] = useState(1);

  useFrame(() => {
    // console.log(data.delta)
  });

  return (
    <mesh ref={ref} {...props}>
      <boxGeometry args={[3, 1, 1]} />
      <meshStandardMaterial color={'red'} />
    </mesh>
  );
};

export { Submarine };
