import React, { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/useOutsideClick";
import Image1 from '../assets/canva.jpeg'; // Assuming you're still using an image asset
import gal1 from '../assets/gallery1.jpg'
import gal2 from '../assets/gallery2.jpg'
import gal3 from '../assets/gal3.jpg'
import gsap from 'gsap';  // Ensure GSAP is imported
import gal5 from '../assets/gal5.jpg'

import gal4 from '../assets/gal4.png'
export function ExpandableCardDemo() {
    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
    const id = useId();
    const ref = useRef<HTMLDivElement>(null);
   
    useEffect(() => {
      function onKeyDown(event: KeyboardEvent) {
        if (event.key === "Escape") {
          setActive(false);
        }
      }
   
      if (active && typeof active === "object") {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
   
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);
   
    useOutsideClick(ref, () => setActive(null));


//Hover Cursor Effect
    
const img= useRef<HTMLDivElement>(null)

useLayoutEffect(() =>{
  
  const cursor = document.querySelector("#cursor");
  const button = document.querySelectorAll("#image-hover");  // Target all elements with this class....Use this if gsap is working only for 1 element at a time 


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

    button.forEach(button => {          //Use this if gsap is working only for 1 element at a time 
        button.addEventListener("mouseenter", MouseEnter);
        button.addEventListener("mouseleave", MouseLeave);
    });

    return () => {
        button.forEach(button => {
            button.removeEventListener("mouseenter", MouseEnter);
            button.removeEventListener("mouseleave", MouseLeave);
        });
    }
  }
    
  } , []);
  

   
    return (
        
      <>
        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 h-full w-full z-10"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed inset-0   grid place-items-center z-[100]">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
              >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
  src={active.src}
  alt={active.title}
  width="500"
  height="500"
  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover "
/>
                </motion.div>
   
                <div>
                  <div className="flex justify-between items-start p-4">
                    <div className="">
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-[700] text-[1.6vw] font-['aftesto'] font-[#1D1917] dark:text-neutral-200 text-base"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-neutral-600 dark:text-neutral-400 text-[1.4vw] font-[600] font-['degular-light'] text-base"
                      >
                        {active.description}
                      </motion.p>
                    </div>
   
                  </div>
                  <div className="pt-0 relative px-4">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-neutral-600 text-[1.1vw] md:text-sm-medium:text-base h-40 md:h-fit pb-4 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                    >
                      {typeof active.content === "function"
                        ? active.content()
                        : active.content}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>

{/* Main Grind of the gallery element */}
        <div className="flex w-full justify-center">

        <ul className="mt-[6vh] w-[95%] grid grid-cols-3 gap-x-0 items-center justify-center  gap-y-6">
          {cards.map((card, index) => (
              <motion.div
              
              layoutId={`card-${card.title}-${id}`}
              key={card.title}
              onClick={() => setActive(card)}
          
              className=" flex flex-col  hover:bg-[#F2F2F2] ml-4 mr-4 h-[40vh]  dark:hover:bg-neutral-400 overflow-hidden rounded-xl w-[30vw]  cursor-pointer">
              <div ref={img}  id="image-hover" className="flex flex-col  w-full h-[100%]">
                <motion.div layoutId={`image-${card.title}-${id}`} className="w-[100%]  overflow-hidden h-[100%]">
                <img
                  src={card.src} 
                  alt={card.title}
                  width="500"
                  height="500"
                  className="w-full h-[100%] bg-cover  sm:rounded-tr-lg sm:rounded-tl-lg object-cover  "
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </ul>
          </div>
        
      </>
    );
  }
   
  export const CloseIcon = () => {

    
  
    return (
      <motion.svg
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.05,
          },
        }}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 text-black"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
      </motion.svg>
    );
  };
   
  const cards = [
    {
      description: "Table Full of Devs",
      title: "SOLANA HACKER HOUSE",
      src: gal1,
      content: () => {
        return (
          <p>
            Got an oppurtunity to attend the Hacker House conducted by Solana in Bengaluru at July 2024. Interated with many Tech nerds and exchanged knowledge.
          </p>
        );
      },
    },

   
    {
      description: "Endless Photoshoot in Kurta & Payjama",
      title: "Ethnic Day",
      src: gal3,
      content: () => {
        return (
          <p>
            Attended class in Kurta after which stated endless photoshoot at every Aesthetic location in the campus. 
          </p>
        );
      },
    },
    {
      description: "First Day At College",
      title: "Beginning of New Friendships",
      src: gal2,
      content: () => {
        return (
          <p>
            This was our initial days at SRM exited for the college life , unknowm of the fact that good college life exist only in movies of Karan Johar.  
          </p>
        );
      },
    },
    {
      description: "Last Night Completion",
      title: "Project Night",
      src: gal4,
      content: () => {
        return (
          <p>
            This was the night where the sleep was totally compromised for completing the Language group project of making a Web Application for promoting the Learning of new languages.
          </p>
        );
      },
    },
    {
      description: "Escape From Coding",
      title: "Nighout with Devs",
      src: gal5,
      content: () => {
        return (
          <p>
            Escaping work for some enjoyment and memories. This night in Bengaluru is unforgetable with go-karting , clubbing etc. No one carried their laptop to Bengarulu.
          </p>
        );
      },
    },




  ];


  export default ExpandableCardDemo