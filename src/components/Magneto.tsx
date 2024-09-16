import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap';
import { Power3, Elastic } from 'gsap';


interface MagnetoProps {
    className?: string; // className is optional
    children: React.ReactNode; // children can be any React node
  }
function Magneto  ({ className, children }: MagnetoProps) {


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

  return (
    <div ref={magnetoRef}  className={className}>
        <div ref={btntextRef}>
            {children}
        </div>
    </div>

  )
}

export default Magneto