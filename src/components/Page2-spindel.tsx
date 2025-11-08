import React, { useEffect, useRef , useLayoutEffect, useState } from 'react'
import {gsap} from 'gsap';
import Spindel from '../assets/Page2-spindel.svg'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
gsap.registerPlugin(ScrollTrigger);

function spindel() {
     const spindelRef = useRef(null)

  const [isMobile, setIsMobile] = useState(false);

       // ✅ Detect mobile screen
  useLayoutEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handleResize = () => setIsMobile(mq.matches);
    mq.addEventListener("change", handleResize);
    return () => mq.removeEventListener("change", handleResize);
  }, []);


    useLayoutEffect(() => {
    if (!isMobile) {
      const ctx = gsap.context(() => {
        gsap.to(spindelRef.current, {
          rotate: 360,
          ease: "none",
          scrollTrigger: {
            trigger: spindelRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      }, spindelRef);

      return () => ctx.revert();
    }
  }, [isMobile]);



   
    return ( 


    <div className='flex items-center w-[80%] relative left-[50%] -translate-x-2/4 justify-center flex-col h-[20%] border-t-2 border-t-[#B09E94] '>
    <div className="w-[70%] h-[50%] flex items-center justify-center">
        {isMobile ? (
          // 📱 Mobile: Framer Motion infinite rotation (no GSAP)
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 8, // rotation speed
            }}
            style={{
              transformOrigin: "center center",
              display: "inline-block",
              willChange: "transform",
            }}
          >
            <img
              src={Spindel}
              alt="Spindel"
              className=" object-contain select-none pointer-events-none"
            />
          </motion.div>
        ) : (
          // 💻 Desktop: GSAP scroll-based animation
          <div
            ref={spindelRef}
            id="rotate"
            className="inline-block will-change-transform"
            style={{ transformOrigin: "center center" }}
          >
            <img
              src={Spindel}
              alt="Spindel"
              className="object-contain select-none pointer-events-none"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default spindel