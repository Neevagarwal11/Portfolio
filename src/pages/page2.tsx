import React, { useEffect, useRef , useLayoutEffect, useState, useContext } from 'react'
import Page2Spindel from '../components/Page2-spindel'
import {gsap , Power3 , Elastic} from 'gsap';
import img from '../assets/Explore Me.svg'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

function page2(event: {


  clientY: any; clientX: any; 
}) {

  // Btn Img
  useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        const t = gsap.timeline({
          scrollTrigger: {
            trigger:magnetoRef.current, 
            scrub: 1,
          },
        });
  
        t.to("#img>img", { 
          rotate: '350deg',
          duration:5,
          scrub:2,
        });
      }, magnetoRef); // Ensure gsap context is using the correct reference
  
      return () => ctx.revert();
    }, []);


    // Button Movement ---->MAGNETO
    
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
      const magnetoStrength =60
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

//Cursor Effect
const btn= useRef<HTMLDivElement>(null)

useLayoutEffect(() =>{
  
  const cursor = document.querySelector("#cursor");
  const button = btn.current


  if(button){
   
    const MouseEnter =() =>{
      gsap.to(cursor,{
        scale:3.9,
        opacity:0.3,
        duration:0.3,
        zIndex:0 ,
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
  


  
  const navigate = useNavigate();

  return (
    <div className='h-screen z-10 w-full bg-[#1D1917]  text-white '>
      <Page2Spindel></Page2Spindel>


    <div className='p2-container w-full h-[70%] relative bottom-0 flex  flex-row'>

      <div className='left flex items-center justify-center font-["aftesto"] w-[50%] h-[100%] relative left-0'>
        <p className='w-[65%] font-[900] text-[#E3D9C9] text-2xl absolute '>I'm an Indian undergraduate student and a passionate web developer, specializing in creating dynamic and responsive websites. I'm always eager to learn new technologies and improve my skills in both front-end and back-end development. </p>
      </div>

{/* Button */}


      <div ref={magnetoRef}  className='right  w-[50%] h-[100%] relative right-0  flex items-center justify-center' >
        <div id='container' onClick={() => navigate('/explore')}  ref={btn} className='btn  cursor-none z-10  container cursor-pointer flex items-center justify-center h-[40%] w-[30%] '>
          <div id='img' className='scale-[1.2] rotate-img absolute flex items-center justify-center'>
          <img src={img} alt="" ></img> 
          </div>
          <div ref={btntextRef} className='rounded-[200px] w-[50%] p-[1em] h-[50%] text-2xl font-["bodoni"] font-[800] text-[#B09E94]' id='btn-text'>PUSH ME!</div>
        </div>

      </div>
    </div>

    </div>
  )
}

export default page2

function activateBtn(this: HTMLDivElement, ev: MouseEvent) {
  throw new Error('Function not implemented.');
}
