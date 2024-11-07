import React from 'react'

function Exam_list_card(props) {
  return (
    <div className='flex flex-col items-center'>
      <p className='bg-green-600 w-full self-start text-white text-center'>{props.year}</p>
        <ul className='w-full p-3 pt-0 flex flex-col justify-center items-center gap-3 rounded-lg shadow-md'>
            <li><p className='text-[4rem] font-bold'>{props.score}</p></li>
            <li><p className='text-center'>Exam: {props.sub}</p></li>
            <li><p>Given Time: {props.time}</p></li>
            <li><p>Questions : {props.num}</p></li>
            <li><p>Exam Year: {props.year}</p></li>
            
        </ul>
    </div>
  )
}

export default Exam_list_card