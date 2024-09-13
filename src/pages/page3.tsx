import React, { ReactNode } from 'react'
import ochi from '../assets/ochi.png'
function page3() {
    const arr = ["Ochi" , "sdfdf"]
    function item(value: { name: string; url: string }, index: number, array: { name: string; url: string }[]): ReactNode {
        throw new Error('Function not implemented.')
    }

  return (
    <div className='w-full bg-[#1D1917] h-[300vh] border-2'>
        {/* Best-Project Array */}
        {[
            {name:"Ochi" , url:"#" , img:ochi , para:"This is a React built website with modern animations using various JS Libraries and concepts."},
            {name:"Lazarev" , url:"#"}

        ].map((item ,index) => (
                <div className='w-full h-[100vh] border-2 flex items-center justify-center border-green-400'>
                <div className={`internal h-[100%] w-[85%] absolute flex items-center border-2 ${index %2 ===0 ? "flex-row" :"flex-row-reverse"}`}>

                <div className={`img-box w-[45%] h-[45%] rounded-[30px] overflow-hidden border-2 absolute`}>
                    <img src={item.img} alt="" className='scale-[1.1]'/>
                </div>
                <div className={`text-8xl translate-y-[10vw]  absolute ${index %2 ===0 ? "left-[45%]" :"right-[45%]"}`}>{item.name}</div>
                <div className={`text-2xl font-["para"]  border-2 w-[40%] absolute ${index %2 ===0 ? "right-2" :"left-2"}`}><p>{item.para}</p></div>

                </div>


                </div>
            
        ))}
    </div>
  )
}

export default page3