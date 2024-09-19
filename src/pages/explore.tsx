import React, { useLayoutEffect, useRef } from 'react'
import photo from '../assets/personal.jpg'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


function explore() {
  gsap.registerPlugin(ScrollTrigger);

  const scroller = useRef<HTMLDivElement | null>(null);
//Right Scroller
  useLayoutEffect(() =>{
    

    const scr = scroller.current


      let ctx = gsap.context(() =>{
        const t = gsap.timeline({
          scrollTrigger:{
            trigger:scr,
            scrub:1
          },
        });

          t.to("#scroller-element" , {
            x:"-300",
            duration:2,
            scrub:2
          })


      })
      
      
      return() => ctx.revert();
    

    } , []); 

  const scrollerleft = useRef<HTMLDivElement | null>(null);

  // Left Scroller
  useLayoutEffect(() =>{
    

    const scr = scrollerleft.current


      let ctx = gsap.context(() =>{
        const t = gsap.timeline({
          scrollTrigger:{
            trigger:scr,
            scrub:1
          },
        });

        
          t.to(scr , {
            x:"300",
            duration:3,
            scrub:2
          })


      })
      
      
      return() => ctx.revert();
    

    } , []); 



  return (
    <>
    <div id='main' className='w-full h-screen bg-[#1D1917] flex flex-row overflow-x-hidden'>
      <div className='left-div w-[50%] h-[100%]  flex items-center justify-center'>
        <div className='w-[55%] h-[70%] rounded-[40px] overflow-hidden  '><img src={photo} alt=""  className='w-[100%] h-[100%]'/></div>
      </div>

      <div className='right font-["migra"] text-2xl text-[#B09E94] w-[50%] h-full flex items-center justify-center'>
        <div className='para w-[55%] h-[50%]'>
          <h3 className='font-[700]'>Nice to meet you all.</h3>
          <p className='mt-8 font-[500] leading-0'>I am Neev Agarwal from Chennai and currently pursuing my undergrad in Computer Science with AI&Ml at SRM ktr Campus. I've had an experience of 2 years in Frontend Web Development and have explored many frameworks and techniques to deliver modern and optimized websites. Still learning a lot and building cool stuffs. </p>
        </div>
      </div>


    </div>


{/* Scroller */}
    <div className='w-full h-[70vh] bg-[#1D1917] font-["migra"]  text-[#B09E94]'>

      <div className='scroller1 flex flex-row w-full h-[20%]   gap-4'>

        <div id='scroller-element' ref={scroller} className=''>
          <div className='text-[5vw] whitespace-nowrap	'> Dreaming / Trading / Gyming / Coding / Sleeping/</div>
        </div>
        <div id='scroller-element' ref={scroller} className=''>
          <div className='text-[5vw] whitespace-nowrap	'> Dreaming / Trading / Gyming / Coding / Sleeping/</div>
        </div>
      </div>

{/* Second Scroller */}
      <div className='scroller2 flex flex-row w-full h-[40%] flex items-center translate-x-[-16vw]  gap-4'>

        <div id='scroller-element' ref={scrollerleft} className=''>
          <div className='text-[12vw] whitespace-nowrap'>Kanncomp India | Kanncomp India |</div>
        </div>
        <div id='scroller-element' ref={scroller} className=''>
          <div className='text-[9vw] whitespace-nowrap'> Dreaming / Trading / Gyming / Coding / Sleeping/</div>
        </div>
      </div>

{/* Third Scroller */}
      <div className='scroller3 flex flex-row w-full h-[20%]  gap-[7vw]'>

        <div id='scroller-element' ref={scroller} className=''>
          <div className='text-[5vw] whitespace-nowrap	translate-x-[6vw]'> Crafting Pixel-Perfect Experiences, One Line at a Time.</div>
        </div>
        <div id='scroller-element' ref={scroller} className=''>
          <div className='text-[5vw] whitespace-nowrap	'>Crafting Pixel-Perfect Experiences, One Line at a Time.</div>
        </div>
      </div>

    </div>



    <div className='w-full h-screen bg-[#1D1917]'></div>
    </>
  )
}

export default explore