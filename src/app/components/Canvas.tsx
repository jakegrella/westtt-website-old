
"use client";

import { Canvas as ThreeCanvas, useLoader } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

const DirectionalLight = () => {
    const directionalLightRef = useRef()
    const [isReady, setIsReady] = useState(false)
    useEffect(() => {
      if (directionalLightRef.current) {
        setIsReady(true)
      }
    })
    return (
      <>
        <directionalLight
          ref={directionalLightRef}
          position={[-50, -50, 100]}
          color={0xffffff}
          intensity={1}
        />
        {isReady && (
          <directionalLightHelper args={[directionalLightRef.current, 2, 0xff0000]} />
        )}
      </>
    )
  }

export default function Canvas() {
    const synth = useLoader(OBJLoader, '/synth.obj')

    return (
        <ThreeCanvas>
            <Suspense fallback={null}>
                    <ambientLight intensity={.1} />
                    <DirectionalLight />
                    <primitive
                        object={synth as object}
                        scale={[0.03, 0.03, 0.03]}
                        position={[-4, 1, -5]}
                        onClick={() => console.log('clicked')}
                    />
            </Suspense>
        </ThreeCanvas>
    )
}