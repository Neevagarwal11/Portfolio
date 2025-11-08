import React, { ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react'
import ochi from '../assets/ochi.png'
import lazarev from '../assets/lazarev.png'
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ww from '../assets/wordweb.png'
import Magneto from '../components/Magneto'
import { useNavigate } from 'react-router-dom';
import Button from '../components/buttonhover'
import { motion } from "framer-motion";
import invoiceai from '../assets/invoiceAi.png'
import pictoriaai from '../assets/pictoriaai.png'

function page3() {
    const navigate = useNavigate(); 
  const [isMobile, setIsMobile] = useState(false);

    function item(value: { name: string; url: string }, index: number, array: { name: string; url: string }[]): ReactNode {
        throw new Error('Function not implemented.')
    }

    const section = useRef<(HTMLDivElement | null)[]>([]);
    const main = useRef<HTMLDivElement>(null);

      useLayoutEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    setIsMobile(mq.matches);
    const handleResize = () => setIsMobile(mq.matches);
    mq.addEventListener("change", handleResize);
    return () => mq.removeEventListener("change", handleResize);
  }, []);
    
    // GSAP under this 

  const projects = [
      {
        name: "Pictoria Ai",
        url: "https://pictoria-ai-neev.vercel.app",
        img:pictoriaai ,
        para:
          "Built an AI-powered SaaS platform integrating Replit API for intelligent image generation and Stripe for secure digital payments using Next.js and Supabase.",
        color: "#3D3D42",
      },
      {
          name: "Invoice AI",
          url: "https://invoice-extractor-6j1gl96cj-neev-agarwals-projects.vercel.app/",
          img: invoiceai,
          para:
          "Website to encourage the learning of new languages. This was a project built for the language class in the 1st year of college.",
          color: "#2C4A52",
        },
        {
          name: "Lazarev",
          url: "https://neev-animated.netlify.app/",
          img: lazarev,
          para:
            "Developed an AI-driven invoice details extractor using Google Gemini API to automate and accurately extract financial data from documents, streamlining audit workflows for Chartered Accountants.",
          color: "#A8B69A",
        },
  ];

    useLayoutEffect(() =>{
            if (isMobile) return;
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

    },[isMobile]);  

    useLayoutEffect(() =>{
         if (isMobile) return;

        let ctx = gsap.context(() => {

            if(main){
                main?.current?.addEventListener('mouseleave' , (event:MouseEvent) =>{
                    gsap.to("#main" , {
                        backgroundColor:"#1D1917",
                    })
                } )
            }
        })
    },[isMobile])
        
//parallax Effect

const image = useRef<(HTMLDivElement | null)[]>([]);
useLayoutEffect(() =>{
    if (isMobile) return;
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
},[isMobile])


//Cursor Button Hover

const btn= useRef<HTMLDivElement>(null)

useLayoutEffect(() =>{
      if (isMobile) return;

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
    
  }, [isMobile])
  


// Project Img Cursor   
useLayoutEffect(() =>{
        if (isMobile) return;

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

    }, [isMobile])

  return (
    <div  ref ={main} id='main' className='w-full py-8  bg-[#1D1917]  flex flex-col'>
        {/* Best-Project Array */}
       {projects.map((item, index) =>
        isMobile ? (
          // 📱 MOBILE VERSION — Framer Motion Animations
          <motion.div
            key={index}
            className="w-full h-[70vh] flex  flex-col items-center justify-center text-center py-4 px-4"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="w-[90%] h-2/3  rounded-[30px] mb-2 mt-4"
              whileHover={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <motion.img
                src={item.img}
                alt={item.name}
                className="h-2/3 object-cover rounded-[30px]"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.2 }}
              />
            </motion.a>

            <motion.h2
              className="text-[#DACEBA] text-5xl font-semibold -mt-6 mb-4"
              initial={{ opacity: 0 , y:20 }}
              whileInView={{ opacity: 1 , y:-90}}
              transition={{ duration: 0.6 }}
            >
              {item.name}
            </motion.h2>

            <motion.p
              className="text-[#DACEBA] text-lg w-[80%]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: -80 }}
              transition={{ duration: 0.7 }}
            >
              {item.para}
            </motion.p>
          </motion.div>
        ) : (
          // 💻 DESKTOP VERSION — GSAP Animations
          <div
            key={index}
            id="internal"
            className="w-full h-[100vh] flex items-center justify-center relative"
          >
            <div
              id="p3elem"
              ref={(el) => (section.current[index] = el)}
              className={`internal h-full w-[85%] absolute  flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <a href={item.url} target="_blank" rel="noreferrer">
                <div
                  id="imgbox"
                  ref={(el) => (image.current[index] = el)}
                  className="img-box border-2 w-[40vw] h-[45vh] relative translate-y-[5vw]
                             flex items-center rounded-[30px] overflow-hidden absolute bg-cover bg-center"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    id="image"
                    className="xl:scale-[1.4] md:scale-[1.4] bg-cover absolute w-full h-full"
                  />
                </div>
              </a>

              <motion.h2
              className="text-[#DACEBA] z-[500]  absolute text-8xl font-light -mt-6 mb-4"
              initial={
                index%2==0
                ?{ opacity: 0 , y:150  , x:550}
                :{opacity:1 , y:200 , x:-550}
            }
              whileInView={
                index%2==0
                ?{ opacity: 1 , y:100 ,x:550}
                :{ opacity: 1 , y:150 ,x:-550}
                
            }
              transition={{ duration: 0.6 }}
            >
              {item.name}
            </motion.h2>

              <div
                id="p3para"
                className={`xl:text-2xl md:text-lg font-['para'] text-[#DACEBA]
                            w-[40%] absolute ${
                              index % 2 === 0 ? "right-2" : "left-2"
                            }`}
              >
                <p>{item.para}</p>
              </div>
            </div>
          </div>
        )
      )}


{/* View All Projects Button */}
        <div className='lg:w-full w-full h-[20vh] lg:h-[30vh]  flex items-center justify-center'>



        <Magneto>
            <div id='p3btncontainer' className='  w-[90%] h-[12vh] lg:h-[15vh]  lg:w-[100%]  flex items-center justify-center cursor-pointer '>
                <div id='button'onClick={() => navigate("/works")}  ref={btn} className='button relative bg-[#F2F2F2] h-[60%] lg:w-[100%] lg:h-[10vh] w-[90%] flex items-center justify-center border-2 overflow-hidden  rounded-[100px]'>
                    <div id='btntext' className='xl:text-2xl md:text-lg text-sm  w-[90%] h-[100%] text-black font-[800] flex items-center justify-center'>View All Projects.</div>
                </div>
            </div>
        </Magneto>
        
        </div>
    </div>
  )
}

export default page3