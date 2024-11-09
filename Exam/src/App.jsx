import React, { useState } from 'react'
import {createBrowserRouter,createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import Home from "./Pages/Home"
import Exam_page from './Pages/Exam_page'
import Exam_Taking_Page from './Pages/Exam_Taking_Page'
import Exam from './Components/Exam'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home/>}>
          <Route index element = {<Exam/>}/>
          <Route path='/exam/:id' element={<Exam_page/>}/>
        </Route>
        <Route path = "/exam/:id/rightaway/:subid" element = {<Exam_Taking_Page/>}/>
        <Route path = "/exam/:id/fullexam/:subid" element = {<Exam_Taking_Page/>}/>
      </Route>
    )
  )
  return(
    <RouterProvider router={router}/>
  )
}

export default App
