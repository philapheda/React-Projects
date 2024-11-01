import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { MdScience } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import subjects from "../assets/sub"
import Card from './card';
function Exam() {
    const [stream, setstream] = useState(true)
    const natcards = subjects.map((card) => {
      if (card.nat) { 
    return (<Link to={"/exam"}><li><Card sub = {card.sub} loc = {card.location}/></li></Link>)}
  })
    const soccards = subjects.map((card) => {
      if (!card.nat) { 
    return (<Link to = {"/exam"}><li><Card sub = {card.sub} loc = {card.location}/></li></Link>)}
  })

    function flip_to_nature(){
      setstream(true)
    }
    function flip_to_social(){
      setstream(false)
    }
  return (
    <div className='block p-7'>
        <div className='flex justify-start gap-8'>
        <button className = 'text-green-700 font-bold bg-green-200 p-2 rounded-md hover:p-1.5 flex items-center gap-2' onClick={flip_to_nature}>{<MdScience />}Natural</button>
        <button className = 'text-green-700 font-bold bg-green-200 p-2 rounded-md hover:p-1.5 flex items-center gap-2'onClick={flip_to_social} >{<GiMoneyStack/>}Social</button> 
        </div>
        {stream && <ul className='p-7 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
           { natcards}
            </ul>}
        {!stream && <ul className='p-7 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
          {soccards}
          </ul>}
    </div>
  )
}

export default Exam