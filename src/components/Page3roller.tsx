import { useTexture } from '@react-three/drei';
import React, { useRef } from 'react'
import * as THREE from "three";
import img from '../assets/project-img.png'
import { useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing'

function Page3roller() {
  const tex = useTexture(img);
  const cyl = useRef<THREE.Group>(null!);

  useFrame((state , delta) =>{
    if(cyl.current){
      cyl.current.rotation.y +=delta;
    }
  })


  return (
    <group ref={cyl} rotation={[0,1.5,0.5]}>
    <mesh >
        <cylinderGeometry args={[1,1,1,60,60,true]}/>   
        <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide}/>
    </mesh>
    </group>
  )
}

export default Page3roller