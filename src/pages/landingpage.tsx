import React, { useEffect  , useLayoutEffect, useRef, useState} from 'react'
import {BackgroundBeamsWithCollisionDemo} from '../components/BackgroundBeamsWithCollisionDemo' 
import Page2 from './page2'
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Projects from './projects'
import Page2_5 from '../pages/page2.5'
import Page3 from '../pages/page3'
import Page4 from '../pages/page4'
import Page5 from '../pages/page5' 
import Contact from '../pages/contact'


gsap.registerPlugin(ScrollTrigger);

function landingpage() {

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

    requestAnimationFrame(raf); 
    lenis.on('scroll', ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);
//Lenis 


//Cursor

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





  return (
    <>


    <div ref={scrollContainerRef} className='w-full cursor-none h-screen z-10 bg-[#1D1917] font-["grand"] text-6xl text-[#B09E94] absolute'>
      <div id='cursor' className='cursor w-[13px] h-[13px] rounded-full  bg-[#D8D1CB] pointer-events-none	 fixed  z-[100]'></div>

        <BackgroundBeamsWithCollisionDemo></BackgroundBeamsWithCollisionDemo>        
        <Page2 clientY={undefined} clientX={undefined}></Page2>
        <Page2_5></Page2_5>
        <Page3></Page3> 
        <Page4></Page4>
        {/* <Page5></Page5>? */}
        <Contact></Contact>

    </div>
    </>
  )
}


export default landingpage