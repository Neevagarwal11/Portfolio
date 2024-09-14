import React, { ReactNode, useEffect, useLayoutEffect, useRef } from 'react'
import ochi from '../assets/ochi.png'
import lazarev from '../assets/lazarev.png'
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ww from '../assets/wordweb.png'


function page3() {
    const arr = ["Ochi" , "sdfdf"]
    function item(value: { name: string; url: string }, index: number, array: { name: string; url: string }[]): ReactNode {
        throw new Error('Function not implemented.')
    }

    const section = useRef<(HTMLDivElement | null)[]>([]);
    const main = useRef<HTMLDivElement>(null);
    
    // GSAP under this 

    const projects =[
        {color:"#A8B69A",img:lazarev, },
        {color:"#3D3D42" ,img:lazarev,},
        {color:"#2C4A52" ,img:lazarev,},
    ]

    useLayoutEffect(() =>{
        let ctx = gsap.context(() =>{

        section.current.forEach((ref,index) =>{
            if(ref){
                const project = projects[index];
                ref.addEventListener('mouseenter' , () =>{
                    
                        gsap.to("#main" , {
                            backgroundColor:project.color,
                            zIndex:100,
                            duration:0.7,
                            // opacity: 0.5, 
                            backdropFilter:"blur(150px)",
                            
                        })

                        gsap.to("#head" , {
                            opacity:1,
                            duration:0.5
                        })
                        
                    });                    
            };
            })


        })
        
        return() =>{
            ctx.revert();
        };

    });  

    useLayoutEffect(() =>{
        let ctx = gsap.context(() => {

            if(main){
                main?.current?.addEventListener('mouseleave' , (event:MouseEvent) =>{
                    gsap.to("#main" , {
                        backgroundColor:"#1D1917",
                    })
                } )
            }
        })
    })
        
//parallax Effect

const image = useRef<(HTMLDivElement | null)[]>([]);
useLayoutEffect(() =>{

    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() =>{

        const speed = -0.7;
        const y = 1920 * speed *0.1;
        image.current.forEach((img , index) =>{
            if(img){

                const setY = gsap.quickSetter(img , "y" , "px")       
                const timeline = gsap.timeline({
                    scrollTrigger:{
                        trigger:section.current[index],
                        scrub:true,
                        start:"top bottom",
                        end:"bottom top",
                        // markers:true,
                        onUpdate: (e) =>{
                            setY(e.progress *y)
                        }
                    },

                })
                
                timeline.to("#image" ,{
                    scale:1,
                    scrub:1,
                })
            }
                
    })
    return () => ctx.revert();
})
})


  return (
    <div  ref ={main} id='main' className='w-full h-[300vh] bg-[#1D1917]  flex flex-col'>
        {/* Best-Project Array */}
        {[
            {name:"Lazarev" , url:"#" , img:lazarev, para:"Website for an AI & ML Agency to advertise their work. Built with HTML , CSS and many modern concepts of JS making it look modern." },
            {name:"WordWeb" , url:"#" , img:ww, para:"Website to encourage the learning of new languages. This was a project built for the language class in the 1st year of college." },
            {name:"Ochi" , url:"#" , img:ochi , para:"This is a React built website with modern animations using various JS Libraries and concepts." , },

        ].map((item ,index) => (
            <div id='internal' className='w-full h-[100vh] flex items-center justify-center relative'>
                <div ref={(el) => (section.current[index] = el)} className={`internal z-10 h-[100%] w-[85%] absolute overflow-hidden flex items-center ${index %2 ===0 ? "flex-row" :"flex-row-reverse"}`}>
 
                <div  ref={(el) => (image.current[index] = el)}  className={`img-box  w-[40vw] h-[45vh] translate-y-[5vw]  flex items-center   rounded-[30px] overflow-hidden absolute bg-cover bg-center`}>
                    <img src={item.img} alt="" id='image'  className='scale-[1.4] bg-cover w-full h-[100%] '/>
                </div>
                <div id='head' className={`text-8xl opacity-[0.3] text-[#DACEBA] font-[500] translate-y-[10vw]  absolute ${index %2 ===0 ? "left-[45%]" :"right-[45%]"}`}>{item.name}</div>
                <div  className={`text-2xl font-["para"] text-[#DACEBA]  w-[40%] absolute ${index %2 ===0 ? "right-2" :"left-2"}`}><p>{item.para}</p></div>

                </div>


            </div>
            
        ))}
    </div>
  )
}

export default page3