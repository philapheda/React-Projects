import  React from 'react'
import { useState, useEffect } from 'react'
import Question_template from '../Components/Question_template'
import Exam_nav from "../Components/Exam_nav"
import { useParams } from 'react-router-dom'
function Exam_Taking_Page(prop) {
  let {subid} = useParams()
  const [question, setQuestions] = useState([]);
  const[count, setcount] = useState(0)
  function counter(count){
    setcount(count)
  }
  useEffect(() => {
    (import(`../assets/Exam_json/${subid}.js`).then(data => setQuestions(data.json)));
    },[]);
  const questions = question.map(que => <Question_template fun = {counter}  num = {que.num} question = {que.question} option = {que.option} ans = {que.ans}/>)
  return (
    <div>
      <Exam_nav time = {prop.time} num = {prop.num} done = {count}/>
      {questions}
    </div>
  )
}

export default Exam_Taking_Page