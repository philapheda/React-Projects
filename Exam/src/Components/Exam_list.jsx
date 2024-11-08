import React from 'react'
import { Link } from 'react-router-dom'
import Exam_list_card from './Exam_list_card'
function Exam_list(prop) {
    const exam_list = prop.examlist.map(exam => <li key={exam.sub} className='flex flex-col p-4 rounded-md'><Exam_list_card sub = {exam.sub} year = {exam.year} score = '0' time = {exam.time} num = {exam.q}/></li>)
  return (
    <div>
      <Link className = "ml-6 text-green-700 font-bold bg-green-200 p-2 rounded-md hover:p-1.5 center gap-2 w-[5rem]"to={"/"}>Back</Link>
    <ul className='p-7 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
        {exam_list}
    </ul>
    </div>
  )
}

export default Exam_list