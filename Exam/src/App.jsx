import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Exam_page from './Pages/Exam_page'
function App() {
  return(
    <Router>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path='/exam' element = {<Exam_page/>}/>
      </Routes>
    </Router>
  )
}

export default App
