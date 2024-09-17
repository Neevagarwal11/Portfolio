import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/useOutsideClick";
import Image1 from '../assets/canva.jpeg'; // Assuming you're still using an image asset
import gal1 from '../assets/gallery1.jpg'
import gal2 from '../assets/gallery2.jpg'
import gal3 from '../assets/gal3.jpg'
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
                      className="text-neutral-600 text-[1.1vw] text-xs md:text-sm-medium:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
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
              <div className="flex flex-col  w-full h-[100%]">
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
            Got an oppurtunity to attend the Hacker House conducted by Solana in Benguluru at July 2024. Interated with many Tech nerds and  
          </p>
        );
      },
    },

   
    {
      description: "Metallica",
      title: "For Whom The Bell Tolls",
      src: gal3,
    //   ctaText: "Visit",
    //   ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p>
            Metallica, an iconic American heavy metal band, is renowned for their
            powerful sound and intense performances that resonate deeply with
            their audience. Formed in Los Angeles, California, they have become a
            cultural icon in the heavy metal music industry. <br /> <br /> Their
            songs often reflect themes of aggression, social issues, and personal
            struggles, capturing the essence of the heavy metal genre. With a
            career spanning over four decades, Metallica has released numerous hit
            albums and singles that have garnered them a massive fan following
            both in the United States and abroad.
          </p>
        );
      },
    },
    {
      description: "",
      title: "",
      src: gal2,
      ctaText: "Visit",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p>
            Himesh Reshammiya, a renowned Indian music composer, singer, and
            actor, is celebrated for his distinctive voice and innovative
            compositions. Born in Mumbai, India, he has become a prominent figure
            in the Bollywood music industry. <br /> <br /> His songs often feature
            a blend of contemporary and traditional Indian music, capturing the
            essence of modern Bollywood soundtracks. With a career spanning over
            two decades, Himesh Reshammiya has released numerous hit albums and
            singles that have garnered him a massive fan following both in India
            and abroad.
          </p>
        );
      },
    },
    {
      description: "",
      title: "sds",
      src: gal4,
      content: () => {
        return (
          <p>
            Himesh Reshammiya, a renowned Indian music composer, singer, and
            actor, is celebrated for his distinctive voice and innovative
            compositions. Born in Mumbai, India, he has become a prominent figure
            in the Bollywood music industry. <br /> <br /> His songs often feature
            a blend of contemporary and traditional Indian music, capturing the
            essence of modern Bollywood soundtracks. With a career spanning over
            two decades, Himesh Reshammiya has released numerous hit albums and
            singles that have garnered him a massive fan following both in India
            and abroad.
          </p>
        );
      },
    },
    {
      description: "",
      title: "fsf",
      src: gal1,
      content: () => {
        return (
          <p>
            Himesh Reshammiya, a renowned Indian music composer, singer, and
            actor, is celebrated for his distinctive voice and innovative
            compositions. Born in Mumbai, India, he has become a prominent figure
            in the Bollywood music industry. <br /> <br /> His songs often feature
            a blend of contemporary and traditional Indian music, capturing the
            essence of modern Bollywood soundtracks. With a career spanning over
            two decades, Himesh Reshammiya has released numerous hit albums and
            singles that have garnered him a massive fan following both in India
            and abroad.
          </p>
        );
      },
    },




  ];


  export default ExpandableCardDemo