import React, { useLayoutEffect, useRef } from 'react'



interface buttonhoverProps {
    className?: string; // className is optional
    children: React.ReactNode; // children can be any React node
  }
function buttonhover({className , children} : buttonhoverProps) {

    
const btn= useRef<HTMLDivElement>(null)

useLayoutEffect(() =>{
  
  const cursor = document.querySelector("#cursor");
  const button = btn.current


  if(button){
   
    const MouseEnter =() =>{
      gsap.to(cursor,{
        scale:2.9,
        opacity:0.3,
        duration:0.3,
        zIndex:0 
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
    <div className={className}>
        <div ref={btn}>
            {children}
        </div>
    </div>
  )
}

export default buttonhover