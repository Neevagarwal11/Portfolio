import { OrbitControls, useTexture } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import Page3roller from '../components/Page3roller';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';
import { Preload, PerformanceMonitor } from '@react-three/drei';
import Navbar from '../components/navbar'
import github from '../assets/github_white.jpg'
import {gsap , Power3 , Elastic} from 'gsap';
import Lenis from '@studio-freight/lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function projects() {


  //Lenis Integration
  const scrollContainerRef= useRef(null);
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 3.8, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: true,
    });

    function raf(time:number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    lenis.scrollTo(0);
    requestAnimationFrame(raf); 
    lenis.on('scroll', ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);

  //Cursor Integration
useLayoutEffect(() => {

  const cursor = document.querySelector("#cursor");


  const onMouseMove = (event: any) =>{
    const {clientX , clientY} = event;
    gsap.to(cursor , {x:clientX , y:clientY})
  }
  const onMouseLeave =(event:any) =>{
    gsap.to(cursor,{
      opacity:0,
      duration:0.3
    })
  }
  const onMouseEnter = (e:any) =>{
    gsap.to(cursor , {
      opacity:1,
      duration:0.3
    })
  }
  document.addEventListener('mouseenter',onMouseEnter)
  document.addEventListener('mousemove' , onMouseMove) 
  document.addEventListener('mouseleave' , onMouseLeave) 

  
})


//Cursor Hover Effect
const btn= useRef<HTMLDivElement>(null)

useLayoutEffect(() =>{
  
  const cursor = document.querySelector("#cursor");
  const button = btn.current


  if(button){
   
    const MouseEnter =() =>{
      gsap.to(cursor,{
        scale:3.9,
        opacity:0.6,
        duration:0.3,
        border:"1px solid grey"
      })
    }
   
    const MouseLeave =() =>{
      gsap.to(cursor,{
        scale:1,
        opacity:1,
        duration:0.3,
        zIndex:100
      })
    }

    button.addEventListener('mouseenter' , MouseEnter)
    button.addEventListener('mouseleave' , MouseLeave)


    return () =>{
      button.removeEventListener('mouseleave' , MouseLeave)
    }
 

  }
  
})



//magento Button


    
const magnetoRef = useRef<HTMLDivElement>(null)
const btntextRef = useRef<HTMLDivElement>(null)

useLayoutEffect(() => {

const magneto = magnetoRef.current;
const btntext = btntextRef.current;

//mouse move

if (magneto && btntext){
magneto?.addEventListener("mousemove" , (event:MouseEvent) =>{

// const activateBtn = (event: { clientX: number; clientY: number; }) =>{

let boundBox = magneto.getBoundingClientRect();
const magnetoStrength =80
const magnetoTextStrength =40

const newX = ((event.clientX - boundBox.left)/magneto.offsetWidth) - 0.6
const newY = ((event.clientY - boundBox.top)/magneto.offsetHeight) - 0.6


let ctx = gsap.context(() => {

gsap.to(magneto,{
    duration:1,
    x: newX *magnetoStrength, 
    y: newY *magnetoStrength,
    ease:Power3.easeOut,
  })
  
  gsap.to(btntext,{
    duration:1,
    x: newX * magnetoTextStrength,
    y: newY * magnetoTextStrength,
    ease:Power3.easeOut,
  })
},magneto);
return () => ctx.revert();

})
}

const resetBtn = () =>{
let ctx = gsap.context(() => {
gsap.to(magneto , {
duration:2,
x:0,
y:0,
ease:Elastic.easeOut,
})
gsap.to(btntext , {
duration:2,
x:0,
y:0,
ease:Elastic.easeOut,
})
})
return() =>ctx.return();
}


//mouse leave
magneto?.addEventListener('mouseleave' ,resetBtn)




}, []);



  return (
    <>
    <Navbar></Navbar>


    <div ref={scrollContainerRef} className='w-full absolute cursor-none  bg-[#1D1917] text-[#B09E94] h-[110vh] '>
    <div id='cursor' className='cursor w-[13px] h-[13px] rounded-full  bg-[#D8D1CB] pointer-events-none	 fixed  z-[100]'></div>

      <div className='w-full  h-[100%] flex flex-row '>
          <div className='top leading-none px-8 flex items-start justify-end flex-col w-[50%] h-[60%] '>
            <div className='heading text-[10vw] font-["grand"]'><h1>Projects</h1></div>
            <div className='text-[5vw] font-["degular-light"] px-6'>selection</div>
          </div>

          <div className='para flex items-end w-[50%]  h-screen'>
            <p className='text-[2vw] w-[80%] p-10 font-["migra"] font-[700]'>Over the last 2 years , my expertise has centered around JavaScript in making creative and  modern looking websites with frameworks like ReactJs , GSAP , Lenis , three.js and many more. Explore my projects below to witness firsthand the impact of my skills.</p>
          </div>
      </div>


      <div className='w-full  bg-[#1D1917] flex flex-row items-center overflow-visible h-[100vh]'>
      <div className='w-[50%] h-[80%] py-10  '>

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


      <div className='w-[50%] h-screen flex flex-col justify-center items-center '>
        <div>
          <p className='text-[1.5vw] w-[78%] p-8 font-["aftesto"] leading-[1.2]'>These samples showcase my work in Frontend Development, including websites created for club recruitment, personal portfolios, and the exploration of various concepts in creative development. More projects, particularly in the area of functional development, are on the way.</p>
          <h2 className='text-[1.9vw] p-8 font-["bodoni"]'>For more projects, feel free to explore my GitHub.</h2>
        </div>

        <div ref={magnetoRef} className='w-full h-[15%] flex items-center   justify-center'>
          <div ref={btn} className='git-btn overflow-hidden w-[23%] h-[80%] border-[1px] rounded-xl '>
          <a href="https://github.com/Neevagarwal11" target='_blank' className='cursor-none'>
            <img src={github} alt="GitHub Logo" />
            <div ref={btntextRef}></div>
          </a>
          </div>
        </div>
      </div>
        </div>


      </div>
        </>
  )
}

export default projects