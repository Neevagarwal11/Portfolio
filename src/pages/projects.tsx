import { OrbitControls, useTexture } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Page3roller from '../components/Page3roller';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';
import { Preload, PerformanceMonitor } from '@react-three/drei';


function projects() {
  return (
    <div className='w-full bg-[#1D1917] h-screen '>
      <div className='w-full overflow-visible	 h-[80vh]'>

    <Canvas flat className=' overflow-visible'  camera={{ fov: 23 }}>
      <ambientLight/>
        <Page3roller></Page3roller>
        <PerformanceMonitor>
          <Preload all />
          <Page3roller />
        </PerformanceMonitor>
        <EffectComposer>
        <Bloom
        mipmapBlur
        intensity={1.5} // The bloom intensity.
        luminanceThreshold={0.23} // luminance threshold. Raise this value to mask out darker elements in the scene.
        luminanceSmoothing={0.24} // smoothness of the luminance threshold. Range is [0, 1]
        />
     <ToneMapping adaptive={false}></ToneMapping>


</EffectComposer>
    </Canvas>
        </div>


    <div className='w-full absolute h-[20%] border-2'></div>
      </div>
  )
}

export default projects