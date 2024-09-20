import React, { ReactNode, useEffect, useLayoutEffect, useRef } from 'react'
import ochi from '../assets/ochi.png'
import lazarev from '../assets/lazarev.png'
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ww from '../assets/wordweb.png'
import Magneto from '../components/Magneto'
import { useNavigate } from 'react-router-dom';
import Button from '../components/buttonhover'

function page3() {
    const navigate = useNavigate(); 

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


//Cursor Button Hover

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
        zIndex:1
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
  


// Project Img Cursor   
useLayoutEffect(() =>{
  
    const cursor = document.querySelector("#cursor");
    const img = document.querySelector(".img-box")
    if(cursor) {
        image.current.forEach((img) =>{

            if(img){
                
                const MouseEnter =() =>{
        gsap.to(cursor,{
          scale:3.9,
          opacity:0.5,
          duration:0.3,
          zIndex:1,
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
  
      img.addEventListener('mouseenter' , MouseEnter)
      img.addEventListener('mouseleave' , MouseLeave)
      
      return () => {
        image.current.forEach((img) => {
          if (img) {
            img.removeEventListener('mouseenter', MouseEnter);
            img.removeEventListener('mouseleave', MouseLeave);
          }
        });
    };
    
    
}
})
}

    })

  return (
    <div  ref ={main} id='main' className='w-full h-[350vh] bg-[#1D1917]  flex flex-col'>
        {/* Best-Project Array */}
        {[
            {name:"Lazarev" , url:"https://neev-animated.netlify.app/" , img:lazarev, para:"Website for an AI & ML Agency to advertise their work. Built with HTML , CSS and many modern concepts of JS making it look modern." },
            {name:"WordWeb" , url:"https://wordwebnkpgs.netlify.app/" , img:ww, para:"Website to encourage the learning of new languages. This was a project built for the language class in the 1st year of college." },
            {name:"Ochi" , url:"https://react-animated-neev.netlify.app/" , img:ochi , para:"This is a React built website with modern animations using various JS Libraries and concepts." , },

        ].map((item ,index) => (
            <div id='internal' className='w-full h-[100vh] flex items-center justify-center relative'>
                <div ref={(el) => (section.current[index] = el)} className={`internal  h-[100%] w-[85%] absolute  overflow-hidden  flex items-center ${index %2 ===0 ? "flex-row" :"flex-row-reverse"}`}>
 

                <a href={item.url} target='_blank'>
                <div  ref={(el) => (image.current[index] = el)}   className={`img-box border-2 w-[40vw] h-[45vh] relative translate-y-[5vw]  flex items-center   rounded-[30px] overflow-hidden absolute bg-cover bg-center`}>
                    <img src={item.img} alt="img not found" id='image'  className='scale-[1.4] bg-cover absolute w-full h-[100%] '/>
                </div>
                </a>


                <div id='head' className={`text-8xl opacity-[0.3] text-[#DACEBA] font-[500] translate-y-[10vw]  absolute ${index %2 ===0 ? "left-[50%]" :"right-[45%]"}`}>{item.name}</div>
                <div  className={`text-2xl font-["para"] text-[#DACEBA]  w-[40%] absolute ${index %2 ===0 ? "right-2" :"left-2"}`}><p>{item.para}</p></div>

                </div>


            </div>
            
        ))}


{/* View All Projects Button */}
        <div className='w-full h-[30vh]  flex items-center justify-center'>



        <Magneto>
            <div className='w-[20vw] h-[15vh]  flex items-center justify-center cursor-pointer '>
                <div id='button'onClick={() => navigate("/works")}  ref={btn} className='button relative bg-[#F2F2F2]  w-[100%] flex items-center justify-centerborder-2  h-[60%] overflow-hidden  rounded-[100px]'>
                    <div id='btntext' className='text-2xl w-full h-full text-black font-[800] flex items-center justify-center'>View All Projects.</div>
                </div>
            </div>
        </Magneto>
        
        </div>
    </div>
  )
}

export default page3