import React, { useState } from 'react'
import {createBrowserRouter,createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import Home from "./Pages/Home"
import Exam_page from './Pages/Exam_page'
import Exam_Taking_Page from './Components/Exam_Taking_Page'
import Exam from './Components/Exam'
import Exam_Taking_Page from './Components/Exam_Taking_Page'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home/>}>
          <Route index element = {<Exam/>}/>
          <Route path='/exam/:id' element={<Exam_page/>}/>
        </Route>
        <Route path = "/exam/:id/:subid" element = {<Exam_Taking_Page/>}/>
      </Route>
    )
  )
  return(
    <RouterProvider router={router}/>
  )
}

export default App
