import React from 'react'
import { Link } from 'react-router-dom'
function Exam_list(prop) {
    const exam_list = prop.examlist.map(exam => <Link to = {`/exam/${exam.sub}/${exam.sub}`}  key={exam.sub+exam.year}><li className='flex flex-col p-4 rounded-md bg-green-200'><p>{exam.sub}</p> <p>Time : {exam.time}</p> <p>Year : {exam.year}</p><p>Question number : {exam.q}</p></li></Link> )
    console.log(exam_list)
  return (
    <div>
    <ul className='flex flex-col gap-4  w-4/5 p-5'>
        {exam_list}
    </ul>
    </div>
  )
}

export default Exam_list