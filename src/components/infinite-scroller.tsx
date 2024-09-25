import React from 'react'

function scroller() {
  return (
    <div className='w-full whitespace-nowrap font-["migra"]  flex flex-row text-[10vw] h-[30vh] border-2'>

        <div id='scroller' className='scroller-div'>
            Say Hello!!
        </div>

        <div id='scroller' className='scroller-div'>
            Say Hello!!
        </div>

        <div id='scroller' className='scroller-div'>
            Say Hello!!
        </div>
    </div>
  )
}

export default scroller