import React from 'react'
import Spindel from '../assets/Page2-spindel.svg'

function page2_5() {
  return (
    <div className='w-full h-screen whitespace-nowrap	 bg-[#1D1917] flex items-center'>

        <div className='scroller flex gap-[10vw]' id='scroller'>
            <div className='text-[20vw] flex felx-row items-center gap-[2vw] px-8' >PORTFOLIO <img src={Spindel} alt="" /></div>
        </div>
        <div className='scroller flex gap-[10vw]' id='scroller'>
            <div className='text-[20vw] flex felx-row items-center gap-[2vw] px-8' >PORTFOLIO <img src={Spindel} alt="" /></div>
        </div>

    </div>
  )
}

export default page2_5