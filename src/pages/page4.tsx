import React from 'react'
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
      {name:'Vite' , img:vite},
      {name:'ExpressJS' , img:ep},
      {name:'Tailwind' , img:tail},
    ]

    const tools =[
      {name:"Git" , img:git},
      {name:"Github" , img:github},
      {name:"TradingView" , img:trading},
      {name:"Figma" , img:figma},
      {name:"Canva" , img:canva},
      {name:"Tally" , img:tally},
    ]


  return (

    <div className='w-full h-screen bg-[#1D1917] flex items-center justify-center'>
      <div className='w-[80%] h-[90%] flex flex-col items-center justify-center border-green-300'>
        <div className='w-[40%] h-[10%] font-["degular-light"] flex items-end justify-center font-[800] text-6xl ' > Tech Stack</div>


{/* ALL the Tech Stack Content */}
        <div className='w-[90%] h-[90%]'>

          {/* Languages */}
          <div className='Languages  flex items-center justify-start flex-col py-8 w-full h-[33%]'>
            <div className='head text-4xl'>Languages</div>

            <div className='w-full h-[100%] justify-center flex py-8 flex-row gap-6  p-5'>

              {tech.map((item , index) =>(
                <div className=' h-[70%] px-4 gap-2 justify-around overflow-hidden items-center relative flex flex-row rounded-full border-[1px]'>
                  <div className='img   h-[90%] overflow-hidden rounded-full '> <img src={item.img} alt="" className='h-full w-full  bg-center' /> </div>

                  <div className='name  w-[70%] h-full text-2xl font-["degular-light"] flex items-center justify-center '>{item.name}</div>
                </div>
              ))}
            </div>
            
          </div>


              {/*WEB TECH  */}
          <div className='Languages  flex items-center px-12 justify-start flex-col py-8 w-full h-[33%]'>


            <div className='head text-4xl'>Web Technologies</div>

            <div className='w-full h-[90%] flex justify-center flex-row py-8 gap-6  p-2'>

              {web.map((item , index) =>(
                <div className=' h-[100%] px-4 gap-2 justify-around overflow-hidden items-center relative flex flex-row rounded-full border-[1px]'>
                  <div className='img  h-[90%] overflow-hidden rounded-full '> <img src={item.img} alt="" className='h-full w-full  bg-center' /> </div>

                  <div className='name  h-full text-2xl w-[80%] font-["degular-light"] flex items-center justify-center '>{item.name}</div>
                </div>
              ))}
            </div>
            
          </div>


          {/* TOOLs */}
          <div className='Languages  flex items-center px-12 justify-start flex-col py-8 w-full h-[33%]'>


            <div className='head text-4xl'>Tools / Platforms</div>

            <div className='w-full h-[90%] flex justify-center flex-row py-8 gap-6  p-2'>

              {tools.map((item , index) =>(
                <div className=' h-[100%] px-4 gap-2 justify-around overflow-hidden items-center relative flex flex-row rounded-full border-[1px]'>
                  <div className='img  h-[90%] overflow-hidden rounded-full '> <img src={item.img} alt="" className='h-full w-full  bg-center' /> </div>

                  <div className='name  w-[70%] h-full text-2xl font-["degular-light"] flex items-center justify-center '>{item.name}</div>
                </div>
              ))}
            </div>
            
          </div>





        </div>


      </div>
    </div>
  )
}

export default page4