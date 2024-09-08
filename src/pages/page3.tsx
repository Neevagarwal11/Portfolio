import { OrbitControls, useTexture } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Page3roller from '../components/Page3roller';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';


function page3() {
  return (
    <Canvas flat className='bg-[#1D1917]' camera={{fov : 30}}>
        <ambientLight/>
        <Page3roller></Page3roller>
        
        <EffectComposer>
        <Bloom
        mipmapBlur
    intensity={10.5} // The bloom intensity.
    luminanceThreshold={0.33} // luminance threshold. Raise this value to mask out darker elements in the scene.
    luminanceSmoothing={0.14} // smoothness of the luminance threshold. Range is [0, 1]
     />
     <ToneMapping adaptive></ToneMapping>
</EffectComposer>

  
    </Canvas>
  )
}

export default page3