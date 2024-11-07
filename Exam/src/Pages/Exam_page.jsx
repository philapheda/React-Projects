import React from "react"
import Exam_list from "../Components/Exam_list"
import Examlist from '../assets/Examlist'
import { Outlet } from "react-router-dom"
import { useParams } from "react-router-dom"
function Exam_page() {
  const {id} = useParams()
  switch(id){
    case "Mathematics Natural":
      return (<><header><Exam_list examlist = {Examlist.slice(0,3)}/></header> 
      <main><Outlet/></main></> 
    )
      break
    case "Physics":
      return <Exam_list examlist = {Examlist.slice(0,3)}/>
      break
    case "Chemistry":
      return <Exam_list examlist = {Examlist.slice(0,3)}/>
      break
    case "Biology":
      return <Exam_list examlist = {Examlist.slice(0,3)}/>
      break
    case "English":
      return <Exam_list examlist = {Examlist.slice(0,3)}/>
      break
    case "SAT":
      return <Exam_list examlist = {Examlist.slice(0,3)}/>
      break    
  }
}

export default Exam_page