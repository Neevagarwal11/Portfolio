import React, { useLayoutEffect, useRef } from 'react'
import Logo from '../assets/output-onlinepngtools (1).png'
import {gsap , Power3 , Elastic} from 'gsap';
import { useNavigate } from 'react-router-dom';

function navbar() {


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
const navigate = useNavigate();
  return (
    <div id='navbarcontainer'  className='w-full flex flex-row cursor-none px-10 h-[10vh] fixed top-0 text-2xl text-[#B09E94] z-[10]'>
        <div id='navinner' ref={btn} onClick={() => navigate('/home')} className='logo w-[10%] cursor-none  h-[100%] flex flex-row items-center justify-around'> <img src={Logo} alt="" className='w-[20%] h-[35%] '/>
        <h2 className='font-["logo"] text-[1vw] tracking-tighter leading-4'>NEEV <br /> AGARWAL</h2>
        </div>
    </div>
  )
}

export default navbar