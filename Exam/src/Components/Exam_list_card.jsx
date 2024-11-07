import React from 'react'

function Exam_list_card(props) {
  return (
    <div>
        <ul className='p-7 pt-0 flex flex-col justify-center items-center gap-3 rounded-lg shadow-md'>
            <li className='w-full text-center'><p className='bg-green-600 w-full self-start text-white'>{props.year}</p></li>
            <li><p className='text-[4rem] font-bold'>{props.score}</p></li>
            <li><p className='text-center'>Exam: {props.sub}</p></li>
            <li><p>Given Time: {props.time}</p></li>
            <li><p>Exam Year: {props.year}</p></li>
            
        </ul>
    </div>
  )
}

export default Exam_list_card