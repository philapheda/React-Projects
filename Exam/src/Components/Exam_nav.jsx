import React from "react";
import { useParams, Link } from "react-router-dom";
function Exam_nav(props) {
  let {subid} = useParams()
  subid = subid.replace(/[0-9]/g, '')
  return (
  <div className="overflow-visible">
        <div className='p-7 sticky top-0 flex bg-white  justify-between items-center w-full shadow-md'>
        <h1 className='bg-gradient-to-r from-red-500 via-yellow-300 to-green-500 font-bold text-[1.5rem] bg-clip-text text-transparent' >Matric  prep</h1>
        <ul className="flex justify-start items-center gap-6">
              <li className="text-lg"><p>{props.done}/{props.num}</p></li>
              <li className="text-lg"><p>{props.time}</p></li>
              <li><Link to = {`/exam/${subid}`}><button className="bg-red-300 px-2 p-1 rounded-md ">Exit</button></Link></li>
        </ul>
        </div>
  </div>
  );
}

export default Exam_nav;
