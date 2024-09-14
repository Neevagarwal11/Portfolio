import React, { ReactNode, useEffect, useLayoutEffect, useRef } from 'react'
import ochi from '../assets/ochi.png'
import lazarev from '../assets/lazarev.png'
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



function page3() {
    const arr = ["Ochi" , "sdfdf"]
    function item(value: { name: string; url: string }, index: number, array: { name: string; url: string }[]): ReactNode {
        throw new Error('Function not implemented.')
    }

    const section = useRef<(HTMLDivElement | null)[]>([]);
    const main =  useRef<HTMLDivElement>(null);
    
    // GSAP under this 

    const projects =[
        
        {name:"Lazarev" , url:"#" , img:lazarev, para:"Website for an AI & ML Agency to advertise their work. Built with HTML , CSS and many modern concepts of JS making it look modern." ,color:"rgba(217, 197, 222, 0.73)" },
        {name:"Ochi" , url:"#" , img:ochi , para:"This is a React built website with modern animations using various JS Libraries and concepts." ,color:"#BCD559"},

    ]

    useLayoutEffect(() =>{
        section.current.forEach((ref,index) =>{
            if(ref){
                const project = projects[index];

                ref.addEventListener('mouseenter' , () =>{

                    let ctx = gsap.context(() =>{

                        gsap.to("#main" , {
                            backgroundColor:project.color,
                            duration:0.7,
                            // opacity: 0.5, 
                            backdropFilter:"blur(150px)"
                        });
                    });
                    return () =>ctx.revert();
                });


                ref.addEventListener('mouseleave' , ()=>{
                    let ctx = gsap.context(() =>{
                        gsap.to("main",{
                            backgroundColor:"#1D1917",
                            duration:0.7,
                        })
                    })
                })
            }
        })
        
    } , [projects])


  return (
    <div ref={main} id='main' className='w-full bg-[#1D1917] h-[300vh] border-2'>
        {/* Best-Project Array */}
        {[
            {name:"Lazarev" , url:"#" , img:lazarev, para:"Website for an AI & ML Agency to advertise their work. Built with HTML , CSS and many modern concepts of JS making it look modern." },
            {name:"Ochi" , url:"#" , img:ochi , para:"This is a React built website with modern animations using various JS Libraries and concepts." , },

        ].map((item ,index) => (
                <div className='w-full h-[100vh] flex items-center justify-center'>
                <div className={`internal z-10 h-[100%] w-[85%] absolute flex items-center ${index %2 ===0 ? "flex-row" :"flex-row-reverse"}`}>

                <div ref={(el) => (section.current[index] = el)} className={`img-box w-[50%] h-[20%] flex border-2 items-center rounded-[50px]   overflow-hidden absolute bg-cover bg-center`}>
                    <img src={item.img} alt="" className='scale-[1.15] bg-cover  '/>
                </div>
                <div className={`text-8xl text-[#DACEBA] font-[500] translate-y-[10vw]  absolute ${index %2 ===0 ? "left-[45%]" :"right-[45%]"}`}>{item.name}</div>
                <div className={`text-2xl font-["para"] text-[#DACEBA]  w-[40%] absolute ${index %2 ===0 ? "right-2" :"left-2"}`}><p>{item.para}</p></div>

                </div>


                </div>
            
        ))}
    </div>
  )
}

export default page3