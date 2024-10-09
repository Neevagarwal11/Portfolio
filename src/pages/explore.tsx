import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import photo from '../assets/personal.jpg'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { Power3, Elastic } from 'gsap';
import resume from '../assets/NEEV AGARWAL RESUME.pdf'
import Navbar from '../components/navbar'
import Gallery from '../pages/page5'


interface MagnetoProps {
  className?: string; // className is optional
  children: React.ReactNode; // children can be any React node
}
function explore() {
  
  const scrollContainerRef= useRef(null);
  const [isInitialScroll, setIsInitialScroll] = useState(true);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 3.8, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: true,

    });

    if (isInitialScroll) {
      lenis.scrollTo(0);
      setIsInitialScroll(false);
    }
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

        t.from(scr,{
          x:'-100'
        })
          t.to(scr , {
            x:"100",
            duration:3,
            scrub:2
          })


      })
      
      
      return() => ctx.revert();
    

    } , []); 
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


// Btn Magneto


const magnetoRef = useRef<HTMLDivElement>(null)
const btntextRef = useRef<HTMLDivElement>(null)

useLayoutEffect(() => {

const magneto = magnetoRef.current;
const btntext = btntextRef.current;

//mouse move

if (magneto && btntext){
magneto?.addEventListener('mousemove' , (event:MouseEvent) =>{

// const activateBtn = (event: { clientX: number; clientY: number; }) =>{

let boundBox = magneto.getBoundingClientRect();
const magnetoStrength =30
const magnetoTextStrength =60

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

// }
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




useLayoutEffect(() =>{
  
  const cursor = document.querySelector("#cursor");
  const button = document.querySelector("#btn")


  if(button){
   
    const MouseEnter =() =>{
      gsap.to(cursor,{
        scale:3.9,
        opacity:0.3,
        duration:0.3,
        zIndex:100 ,
        border:"2px solid grey"
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




  return (
    <>
    <div ref={scrollContainerRef} className='cursor-none absolute w-full h-screen absolute '>
    <Navbar></Navbar>
    <div id='cursor' className='cursor w-[13px] h-[13px] rounded-full  bg-[#D8D1CB] pointer-events-none	 fixed  z-[1000]'></div>

{/* Intro */}
    <div id='main' className='w-full relative h-screen bg-[#1D1917]  flex flex-row overflow-x-hidden'>
      <div className='left-div w-[50%]  h-[100%]  flex  items-center justify-center'>
        <div className='w-[55%] h-[70%] rounded-[40px] overflow-hidden  '><img src={photo} alt=""  className='w-[100%] h-[100%]'/></div>
      </div>

      <div className='exright  font-["migra"] flex-col text-2xl text-[#B09E94] w-[50%] h-full flex items-center justify-center'>
        <div id='exploretext' className='para w-[55%]  h-[50%]'>
          <h3 className='font-[700]'>Nice to meet you all.</h3>
          <p className='mt-8 font-[500] leading-0'>I am Neev Agarwal from Chennai and currently pursuing my undergrad in Computer Science with AI&Ml at SRM ktr Campus. I've had an experience of 2 years in Frontend Web Development and have explored many frameworks and techniques to deliver modern and optimized websites. Still learning a lot and building cool stuffs. </p>
        </div>


        <a href={resume} id='exbtn' download="Neev Agarwal Resume" className='w-[60%] h-[17%]'>
        <div id='exbtncontainer'  ref={magnetoRef} className=' w-[60%] z-10  h-[95%] flex items-center justify-center'>
          <div id='exbtndiv' ref={btntextRef} className='w-[70%] z-10 h-[45%] rounded-[15px] bg-[#B09E94] text-[#1D1917] p-2 font-["migra"] font-[600]'>
            Download Resume
            </div>
        </div>
        </a>


      </div>

</div>
  


{/* Scroller */}
    <div id='scrollercontainer' className='w-full h-[70vh] overflow-x-hidden bg-[#1D1917] font-["migra"]  text-[#B09E94]'>

      <div className='scroller1 flex flex-row w-full h-[20%]   gap-4'>

        <div id='scroller-element' ref={scroller} className=''>
          <div className='scrollertext text-[5vw] whitespace-nowrap	'> Dreaming / Trading / Gyming / Coding / Sleeping/</div>
        </div>
        <div id='scroller-element' ref={scroller} className=''>
          <div className='scrollertext  text-[5vw] whitespace-nowrap	'> Dreaming / Trading / Gyming / Coding / Sleeping/</div>
        </div>
      </div>

{/* Second Scroller */}
      <div className='scroller2 flex flex-row w-full h-[40%] flex items-center translate-x-[-16vw]  gap-4'>

        <div id='scroller-element2' ref={scrollerleft} className=''>
          <div className='text-[12vw] whitespace-nowrap'>Kanncomp India | Kanncomp India |</div>
        </div>
        
      </div>

{/* Third Scroller */}
      <div className='scroller3 flex flex-row w-full h-[20%]  gap-[7vw]'>

        <div id='scroller-element' ref={scroller} className=''>
          <div className='scrollertext  text-[5vw] whitespace-nowrap	translate-x-[6vw]'> Crafting Pixel-Perfect Experiences, One Line at a Time.</div>
        </div>
        <div id='scroller-element' ref={scroller} className=''>
          <div className='scrollertext text-[5vw] whitespace-nowrap	'>Crafting Pixel-Perfect Experiences, One Line at a Time.</div>
        </div>
      </div>

    </div>
      

  {/* Experience Section */}

    <Gallery></Gallery>
    </div>
    </>
  )
}

export default explore