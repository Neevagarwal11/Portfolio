import React, { useLayoutEffect, useRef } from 'react'
import insta from '../assets/insta.png'
import Link from '../assets/linkedin.png'
import gmail from '../assets/gmail.png'
import git from '../assets/github.png'
import x from '../assets/twitter.png'
import { gsap, Power3, Elastic } from 'gsap';

function Social() {
  const social = [
    { name: "Instagram", img: insta, url: "#" },
    { name: "Linkedin", img: Link, url: "#" },
    { name: "Gmail", img: gmail, url: "#" },
    { name: "Github", img: git, url: "#" },
    { name: "Twitter", img: x, url: "#" },
  ];

  //Magneto Effect
  const magnetoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const btntextRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    magnetoRefs.current.forEach((magneto, index) => {
      const btntext = btntextRefs.current[index];

      if (magneto && btntext) {
        const handleMouseMove = (event: MouseEvent) => {
          let boundBox = magneto.getBoundingClientRect();
          const magnetoStrength = 50;
          const magnetoTextStrength = 30;

          const newX = ((event.clientX - boundBox.left) / magneto.offsetWidth) - 0.6;
          const newY = ((event.clientY - boundBox.top) / magneto.offsetHeight) - 0.6;

          let ctx = gsap.context(() => {
            gsap.to(magneto, {
              duration: 1,
              x: newX * magnetoStrength,
              y: newY * magnetoStrength,
              ease: Power3.easeOut,
            });

            gsap.to(btntext, {
              duration: 1,
              x: newX * magnetoTextStrength,
              y: newY * magnetoTextStrength,
              ease: Power3.easeOut,
            });
          }, magneto);
          return () => ctx.revert();
        };

        const resetBtn = () => {
          let ctx = gsap.context(() => {
            gsap.to(magneto, {
              duration: 2,
              x: 0,
              y: 0,
              ease: Elastic.easeOut,
            });
            gsap.to(btntext, {
              duration: 2,
              x: 0,
              y: 0,
              ease: Elastic.easeOut,
            });
          });
          return () => ctx.revert();
        };

        magneto.addEventListener('mousemove', handleMouseMove);
        magneto.addEventListener('mouseleave', resetBtn);

        return () => {
          magneto.removeEventListener('mousemove', handleMouseMove);
          magneto.removeEventListener('mouseleave', resetBtn);
        };
      }
    });
  }, []);


//Cursor Effect
const btn = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const cursor = document.querySelector("#cursor");

    btn.current.forEach((button) => {
      if (button) {
        const handleMouseEnter = () => {
          gsap.to(cursor, {
            scale: 3.9,
            opacity: 0.3,
            duration: 0.3,
            zIndex: 100,
            border: "1px solid black"
          });
        };

        const handleMouseLeave = () => {
          gsap.to(cursor, {
            scale: 1,
            opacity: 1,
            duration: 0.3,
            zIndex: 100
          });
        };

        button.addEventListener('mouseenter', handleMouseEnter);
        button.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          button.removeEventListener('mouseenter', handleMouseEnter);
          button.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    });
  }, []); 



  return (
    <div id='socialmain' className='w-full h-[20vh] flex flex-row gap-2 px-[2vw]'>

<div id='socialelecontainer' className='flex flex-row w-[50%] justify-center'>
      {social.map((item, index) => (
        <div id='socialelem' ref={(el) => (magnetoRefs.current[index] = el)} key={index} className='container  w-[12%] flex items-center justify-center h-[60%] '>
          <div ref={(el) => (btn.current[index] = el)}  className='element cursor-none w-[70%] h-[70%] border-2  flex items-center justify-center rounded-[10px]'>
            <a href={item.url} className='w-[100%] h-full flex items-center cursor-none  justify-center p-0 m-0'>
              <img src={item.img} alt="" className='bg-contain w-[90%] h-[90%] aspect-square' />
              <div ref={(el) => (btntextRefs.current[index] = el)}></div>
            </a>
          </div>
        </div>
      ))}
      </ div>

      <div id='socialtext' className='absolute right-[10%] font-["migra"] text-[5.3vw] font-[500]'>Let's Connect !</div>
    </div>
  );
}

export default Social;
