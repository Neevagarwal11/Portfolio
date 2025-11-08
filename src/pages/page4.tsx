import React, { useLayoutEffect, useState } from 'react'
import java from '../assets/java.png'
import js from '../assets/js.png'
import cpp from '../assets/cpp.png'
import ts from '../assets/ts.png'
import sql from '../assets/sql.png'
import python from '../assets/py.png'
import html from '../assets/html.png'
import css from '../assets/css.jpg'
import react from '../assets/react.svg'
import vite from '../assets/vite.png'
import ep from '../assets/express.png'
import tail from '../assets/tailwind.png'
import git from '../assets/git.jpeg'
import github from '../assets/github.jpg'
import trading from '../assets/trading.png'
import canva from '../assets/canva.jpeg'
import figma from '../assets/figma.png'
import tally from '../assets/tally.webp'
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import node from '../assets/nodejs.png'
import postman from '../assets/postman.webp'
import nextjs from '../assets/next-js.png'
import mongodb from '../assets/mongodb.png'
import { motion } from "framer-motion";


gsap.registerPlugin(ScrollTrigger);

function page4() {

    const tech = [
      {name:'Java' , img:java},
      {name:'JavaScript' , img:js},
      {name:'C++' , img:cpp},
      {name:'TypeScript' , img:ts},
      {name:'MySQL' , img:sql},
      {name:'Python' , img:python},
    ]

    const web = [
      {name:'HTML' , img:html},
      {name:'CSS' , img:css},
      {name:'ReactJS' , img:react},
      {name:'NextJs' , img:nextjs},
      {name:'Vite' , img:vite},
      {name:'ExpressJS' , img:ep},
      {name:'Tailwind' , img:tail},
      {name:'NodeJs' , img:node},
      {name:'MongoDB' , img:mongodb},
    ]

    const tools =[
      {name:"Git" , img:git},
      {name:"Github" , img:github},
      {name:"Postman" , img:postman},
      {name:"TradingView" , img:trading},
      {name:"Figma" , img:figma},
      {name:"Canva" , img:canva},
      {name:"Tally" , img:tally},
    ]


  const [isMobile, setIsMobile] = useState(false);

    //Reveal Animation
    useLayoutEffect(() => {

      if(!isMobile){

      let ctx  = gsap.context(() =>{
      let mm  = gsap.matchMedia();

        const head = document.querySelector("#heading");
        const ele = document.querySelectorAll(".content")



        mm.add("(min-width: 1024px)", () => {
          const t = gsap.timeline({
            scrollTrigger: {
              trigger: "#master",
              start: "top top",
              end: "bottom top",
              // markers: true,
            },
          });

          t.to(head,{
            opacity:1,
          })


          
        const time = gsap.timeline({
          scrollTrigger:{
            trigger:"#master",
            start:"top 80%",
            end:"bottom top ",
            // markers:true,
            scrub:true
          }
        })

        time.to(ele , {
          opacity:1,
          // skewX:"0deg",
          translateY:"-40px",
          delay:0.2,
          duration:2,
          stagger:1

        })
  
        });
  
// vdsvsd
        const t = gsap.timeline({
          scrollTrigger:{
            trigger:"#master",
            start:"top bottom",
            end:"bottom top ",
            // markers:true
          }
        })

        t.to(head , {
          opacity:1,
          // y:"-40px"
        })



        const time = gsap.timeline({
          scrollTrigger:{
            trigger:"#master",
            start:"top bottom",
            end:"bottom top ",
            // markers:true,
            scrub:true
          }
        })

        time.to(ele , {
          opacity:1,
          // skewX:"0deg",
          translateY:"-40px",
          delay:0.4,
          duration:5,
          stagger:1

        })
        return () => ctx.revert();
      })
    }
    },[isMobile])



     // 🧠 Detect mobile or desktop once on mount
  useLayoutEffect(() => {
    const mql = window.matchMedia("(max-width: 1023px)");
    setIsMobile(mql.matches);

    const handleResize = () => setIsMobile(mql.matches);
    mql.addEventListener("change", handleResize);

    return () => mql.removeEventListener("change", handleResize);
  }, []);

    // ✅ Mobile version uses Framer Motion instead of GSAP
  const motionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const renderItems = (data: any[]) => (
    <div
      id="elecontainer"
      className="content w-full grid grid-cols-3  grid-flow-row-dense lg:flex lg:justify-center justify-between gap-6 py-4"
    >
      {data.map((item, index) =>
        isMobile ? (
          <motion.div
            key={index}
            variants={motionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="h-[50px] border px-4 flex items-center gap-3 mb-8 rounded-full  border-gray-500"
          >
            <div className="h-[30px] w-[30px] rounded-full overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="h-[100%] w-full object-cover"
              />
            </div>
            <div className="text-sm px-2 font-semibold text-white">{item.name}</div>
          </motion.div>
        ) : (
          <div
            key={index}
            id="p4ele"
            className="h-[50%] gap-2 px-2 py-2 justify-around overflow-hidden translate-y-10 items-center flex flex-row rounded-full border-[1px]"
          >
            <div className="img h-[70%] overflow-hidden rounded-full">
              <img src={item.img} alt="" className="lg:h-[5vh] lg:w-[2vw] bg-center" />
            </div>
            <div className="name h-full text-2xl font-['degular-light'] flex items-center justify-center">
              {item.name}
            </div>
          </div>
        )
      )}
    </div>
)
    

  return (
    <div
      id="p4main"
      className="w-full bg-[#1D1917] flex items-center justify-center"
    >
      <div
        id="p4inner"
        className="w-[100%] flex flex-col items-center justify-center"
      >
        <div
          id="tech"
          className="w-full text-center text-5xl font-bold text-white mb-10"
        >
          Tech Stack
        </div>

        <div id="master" className="w-full  h-full ">
          {/* Languages */}
          <div className="flex flex-col items-center">
            <div
              id="heading"
              className="head opacity-0 text-3xl md:text-4xl text-white mb-4"
            >
              Languages
            </div>
            {renderItems(tech)}
          </div>

          {/* Web Technologies */}
          <div className="flex flex-col items-center">
            <div
              id="heading"
              className="head opacity-1 text-3xl md:text-4xl text-white mb-4"
            >
              Web Technologies
            </div>
            {renderItems(web)}
          </div>

          {/* Tools / Platforms */}
          <div className="flex flex-col gap-2 items-center">
            <div
              id="heading"
              className="head opacity-1 text-3xl md:text-4xl text-white mb-4"
            >
              Tools / Platforms
            </div>
            {renderItems(tools)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page4