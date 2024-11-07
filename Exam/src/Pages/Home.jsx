import React, { useState } from 'react'
import Nav from '../Components/Nav'
import Hero from '../Components/Hero'
import Exam from '../Components/Exam'
import Question_template from '../Components/Question_template'
import { Outlet } from 'react-router-dom'
function App() {
  return(
    <>
  <header>
    <Nav/>
    <Hero/>
  </header>
  <main>
    <Outlet/>
  </main>
  </>
  )
}

export default App
