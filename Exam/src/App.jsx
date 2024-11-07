import React, { useState } from 'react'
import {createBrowserRouter,createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import Home from "./Pages/Home"
import Exam_page from './Pages/Exam_page'
import Question from './Pages/Question'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/exam/:id' element={<Exam_page/>}>
          <Route path = "/exam/:id/:subid" element = {<Question/>}/>
        </Route>
      </Route>
    )
  )
  return(
    <RouterProvider router={router}/>
  )
}

export default App
