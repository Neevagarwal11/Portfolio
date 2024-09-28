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
      opacity:0.1,
      transform:"scaleX(1) scaleY(0.4) translateY(150%)",
      duration:140,
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
    <div className='w-full  h-[120vh] bg-[#1D1917]'>
      {/* Quote */}
      <div id='masterdiv' className='w-[100%] h-[80%] flex items-center justify-center'>
        <div className='w-[90%] h-full '>

          <div id='text' className='text-6xl leading-none leading-[10vw] relative'>let's  <span className='text-[12vw] absolute'>Create</span> <br /> something <span  className='text-[10vw] absolute'>Captivating</span> <br /> and <b className='font-[900]'>truly</b> <span className='text-[10vw] absolute'>Sensational</span></div>

        </div>
      </div>
    <Social></Social>
    </div>

    </>
  )
}

export default contact