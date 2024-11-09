import  React from 'react'
import { useState, useEffect } from 'react'
import Question_template from '../Components/Question_template'
import Exam_nav from "../Components/Exam_nav"
import { useParams } from 'react-router-dom'
function Exam_Taking_Page() {
  let {subid} = useParams()
  const [question, setQuestions] = useState([]);
  useEffect(() => {
    (import(`../assets/Exam_json/${subid}.js`).then(data => setQuestions(data.json)));
    },[]);
  console.log(question)
  const questions = question.map(que => <Question_template num = {que.num} question = {que.question} option = {que.option} ans = {que.ans}/>)
  return (
    <div>
      <Exam_nav />
      {questions}
    </div>
  )
}

export default Exam_Taking_Page