import React from 'react'
import photo from '../assets/personal.jpg'
function explore() {
  return (
    <div className='w-full h-screen bg-[#1D1917] flex flex-row '>
      <div className='left-div w-[50%] h-[100%] border-2 flex items-center justify-center'>
        <div className='w-[55%] h-[70%] border-2 rounded-[40px] overflow-hidden  '><img src={photo} alt=""  className='w-[100%] h-[100%]'/></div>
      </div>

      <div className='right font-["migra"] text-2xl text-[#B09E94] border-2 w-[50%] h-full flex items-center justify-center'>
        <div className='para w-[55%] h-[50%]'>
          <h3 className='font-[700]'>Nice to meet you all.</h3>
          <p className='mt-8 font-[500] leading-0'>I am Neev Agarwal from Chennai and currently pursuing my undergrad in Computer Science with AI&Ml at SRM ktr Campus. I've had an experience of 2 years in Frontend Web Development and have explored many frameworks and techniques to deliver modern and optimized websites. Still learning a lot and building cool stuffs. </p>
        </div>
      </div>
    </div>
  )
}

export default explore