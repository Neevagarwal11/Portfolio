import React, { useEffect  , useRef} from 'react'
import {BackgroundBeamsWithCollisionDemo} from '../components/BackgroundBeamsWithCollisionDemo' 
import Page2 from './page2'
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Page3 from '../pages/page3'


gsap.registerPlugin(ScrollTrigger);

function landingpage() {

//Lenis Integration
  const scrollContainerRef= useRef(null);
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 3.8, // Speed of the scroll (higher value means slower scroll)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      smoothWheel: true, // Enable smooth scrolling for mouse wheel
    });

    function raf(time:number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf); 
    lenis.on('scroll', ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);
//Lenis 


  return (
    <div ref={scrollContainerRef} className='w-full h-screen z-10 bg-[#1D1917] font-["grand"] text-6xl text-[#B09E94] absolute'>
        <BackgroundBeamsWithCollisionDemo>
        </BackgroundBeamsWithCollisionDemo>        
        <Page2 clientY={undefined} clientX={undefined}></Page2>
        {/* <Page3></Page3> */}
    </div>
  )
}


export default landingpage