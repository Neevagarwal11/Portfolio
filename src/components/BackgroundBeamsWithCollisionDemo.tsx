'use client'
import React, { useRef } from "react";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";
import Navbar from '../components/navbar'
import Page2 from '../pages/page2'
import Page3 from '../pages/projects'
import { useEffect } from 'react';


 export function BackgroundBeamsWithCollisionDemo() {

  
  
  return (
    <>
    <div id="p1" className="w-full h-screen  sm:w-full sm:h-screen"  >

    <BackgroundBeamsWithCollision>
      <Navbar>
      </Navbar>

      <div id="p1container" className=" absolute  font-['grand'] flex flex-col justify-around   text-[#B09E94] xl:w-[80vw] z-20 font-bold h-[80vh] items-center ">
        <h3 className="text-[3vh] leading-[0.8em]" >Full Stack Developer</h3>
        <h1 className="text-[18vh] ">CREATING <span className="text-18xl">&</span></h1>
        <h1 className="text-[18vh] md:leading-[0em] leading-[0.9em]">IMPROVING</h1>
        <h2 className="text-4xl sm:text-2xl leading-[1.1em] md:leading-[6em]"> seamless &nbsp; <span className="text-6xl md:text-6xl">experiences</span></h2>
        <h2 className="text-4xl sm:text-2xl md:-mt-8">for <span className="text-8xl font-extrabold	md:text-6xl">web-users</span></h2>
      </div>
    </BackgroundBeamsWithCollision>


    {/* <Page3></Page3> */}


    
    </div>
    </>
  );
}
