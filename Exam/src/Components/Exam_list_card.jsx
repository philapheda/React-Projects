import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineNotStarted } from "react-icons/md";
import { CiTimer } from "react-icons/ci";
function Exam_list_card(props) {
  return (
    <div className='flex flex-col items-center'>
      <p className='bg-green-600 w-full self-start text-white text-center'>{props.year}</p>
        <ul className='w-full p-3 pt-0 flex flex-col justify-center items-center gap-3 rounded-lg shadow-md'>
            <li><p className='text-[4rem] font-bold'>{props.score}</p></li>
            <li><p className='text-center'>Exam: {props.sub}</p></li>
            <li><p>Given Time: {props.time}</p></li>
            <li className='bg-green-300 px-3 p-1 rounded-md'><Link to = {`/exam/${props.sub}/${(props.sub+props.year).replace('/','')}`} className = 'flex items-center justify-center gap-2' >Right Away <MdOutlineNotStarted/></Link></li>
            <li className='bg-green-300 px-3 p-1 rounded-md'><Link to = {`/exam/${props.sub}/${(props.sub+props.year).replace('/','')}`} className = 'flex items-center justify-center gap-2' >Full Exam <CiTimer/></Link></li>
        </ul>
    </div>
  )
}

export default Exam_list_card