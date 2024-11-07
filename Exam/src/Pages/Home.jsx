import React, { useState } from 'react'
import Nav from '../Components/Nav'
import Hero from '../Components/Hero'
import Exam from '../Components/Exam'
import Question_template from '../Components/Question_template'
function App() {
  return(
  <div className=''>
  <Nav/>
  <Hero/>
  <Exam/>
  <Question_template question = "what is your name" option = {['Abrham', 'Meron', 'yonatan', 'Daniel']} correct = 'Abrham'/>
  </div>
  )
}

export default App
