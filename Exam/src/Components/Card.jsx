import React from 'react'

function card(prop) {
  return (
    <div className='p-7 bg-green-100 flex flex-col justify-center items-center gap-3 rounded-lg'>
        <img src={`../../public${prop.loc}`} className='w-4/5'/>
        <p className='font-bold'>{prop.sub}</p>
    </div>
  )
}

export default card