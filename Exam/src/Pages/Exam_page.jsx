import React from "react"
import Exam_list from "../Components/Exam_list"
import Examlist from '../assets/Examlist'
import { Link, Outlet } from "react-router-dom"
import { useParams } from "react-router-dom"
function Exam_page(prop) {
  const {id} = useParams()
  function setter(time,num){
      prop.fun(time, num)
  }
  switch(id){
    case "MathsNatural":
      return <Exam_list examlist = {Examlist.slice(0,8)} fun={setter}/>
    case "Physics":
      return <Exam_list examlist = {Examlist.slice(8,16) } fun={setter}/>
    case "Chemistry":
      return <Exam_list examlist = {Examlist.slice(16,24)} fun={setter}/>
    case "Biology":
      return <Exam_list examlist = {Examlist.slice(24,32)} fun={setter}/>
    case "English":
      return <Exam_list examlist = {Examlist.slice(32,40)} fun={setter}/>
    case "Sat":
      return <Exam_list examlist = {Examlist.slice(40,50)} fun={setter}/>
  }
}

export default Exam_page