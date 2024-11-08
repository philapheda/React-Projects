import React from 'react'
import Question_template from '../Components/Question_template'
import Exam_nav from "../Components/Exam_nav"
import { useParams } from 'react-router-dom'
function Exam_Taking_Page() {
  const {subid} = useParams()
  return (
    <div>
      <Exam_nav/>
      {subid}
    </div>
  )
}

export default Exam_Taking_Page