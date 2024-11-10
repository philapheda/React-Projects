import React from "react"
import Exam_list from "../Components/Exam_list"
import Examlist from '../assets/Examlist'
import { Link, Outlet } from "react-router-dom"
import { useParams } from "react-router-dom"
function Exam_page() {
  const {id} = useParams()
  switch(id){
    case "MathsNatural":
      return <Exam_list examlist = {Examlist.slice(0,8)}/>
    case "Physics":
      return <Exam_list examlist = {Examlist.slice(8,16) } />
    case "Chemistry":
      return <Exam_list examlist = {Examlist.slice(16,24)}/>
    case "Biology":
      return <Exam_list examlist = {Examlist.slice(24,32)}/>
    case "English":
      return <Exam_list examlist = {Examlist.slice(32,40)}/>
    case "SAT":
      return <Exam_list examlist = {Examlist.slice(40,50)}/>
  }
}

export default Exam_page