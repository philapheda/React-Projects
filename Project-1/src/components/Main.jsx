import React from 'react'
import "./Main.css"
import logo from "../assets/lo.png"
function Main() {
  return (
    <div className = "main"> 
        <h1>Fun facts about React</h1>
        <div>
        <img src = {logo}/>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 200k stars on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including <br/> mobile apps</li>
        </ul>
        </div>
    </div>
  )
}

export default Main