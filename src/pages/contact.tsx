import React, { useLayoutEffect } from 'react'
import Scroller from '../components/infinite-scroller'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Social from '../components/social'
gsap.registerPlugin(ScrollTrigger);
import {gsap , Power3 , Elastic} from 'gsap';


function contact() {


  // Text Reveal Animation
useLayoutEffect(() => {
  let ctx = gsap.context(()=>{


    const t = gsap.timeline({
      scrollTrigger:{
        trigger:"#text",
        start:"top 60%",
        end:"bottom 80%",
        scrub:1,
        // markers:true,
      }
    })
    
    t.from("#text span",{
      opacity:0,
      transform:"scaleX(1) scaleY(0.5) translateY(50%)",
      duration:240,
      delay:0.8,
      stagger:0.1,
      ease:Power3.easeOut,
      
    })
    t.from("#text span",{
      duration:140,
      marginLeft:"80px",
      stagger:50,
      ease:Power3.easeOut,
    })
    t.to("#text span",{
      opacity:1,
      marginLeft:"10px",
      duration:"140",
      stagger:50,
      ease:Power3.easeOut,
    })
  })
  
  return () => ctx.revert();
})




  return (
<>
    <div id='contactmain' className='w-full border-t-[1px] border-[#B09E94]  h-[120vh] bg-[#1D1917]'>
      {/* Quote */}
      <div id='masterdiv' className='w-[100%] h-[80%] flex items-center justify-center'>
        <div className='w-[90%] h-full '>

          <div id='text' className='text-6xl leading-4 leading-[20vh] absolute w-[100%] h-[60%]'>let's  <span id='spaan' className='text-[12vw] absolute'>Create</span> <br /> something <span id='spaan'  className='text-[10vw] absolute'>Captivating</span> <br /> and <b className='font-[900]'>truly</b> <span id='spaan' className='text-[10vw] absolute'>Sensational</span></div>

        </div>
      </div>
    <Social></Social>
    </div>

    </>
  )
}

export default contact