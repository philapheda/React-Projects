import React, { useState } from 'react'
import {createBrowserRouter,createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import Home from "./Pages/Home"
import Exam_page from './Pages/Exam_page'
import Exam_Taking_Page from './Pages/Exam_Taking_Page'
import Exam from './Components/Exam'
function App() {
  const [time, settime] = useState('3:00')
  const [num, setnum] = useState(50)
  function setter(time,num){
    setnum(num)
    settime(time)
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home/>}>
          <Route index element = {<Exam/>}/>
          <Route path='/exam/:id' element={<Exam_page fun={setter}/>}/>
        </Route>
        <Route path = "/exam/:id/rightaway/:subid" element = {<Exam_Taking_Page time = {time} num = {num}/>}/>
        <Route path = "/exam/:id/fullexam/:subid" element = {<Exam_Taking_Page time = {time} num = {num}/>}/>
      </Route>
    )
  )
  return(
    <RouterProvider router={router}/>
  )
}

export default App
