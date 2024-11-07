import React from 'react'
import Question_template from '../Components/Question_template'
function Exam_Taking_Page() {
  return (
    <div>
      <Question_template num = {1} question = "what is your name? " option = {['Abrham','Yonatan','Yishak','Meron']} ans = 'Abrham'/>
      <Question_template num = {1} question = "what is your name? " option = {['Abrham','Yonatan','Yishak','Meron']} ans = 'Abrham'/>
      <Question_template num = {1} question = "what is your name? " option = {['Abrham','Yonatan','Yishak','Meron']} ans = 'Abrham'/>
      <Question_template num = {1} question = "what is your name? " option = {['Abrham','Yonatan','Yishak','Meron']} ans = 'Abrham'/>
    </div>
  )
}

export default Exam_Taking_Page