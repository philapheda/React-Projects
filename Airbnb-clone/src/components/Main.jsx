import React from 'react'
import logo from "../assets/group.png"
import Card from './Card'
import data from './data'
import "./Main.css"
function Main() {
   const newcard = data.map(
      function (a) {
        return ( <Card
         img = {`../../public/${a.coverImg}`}
         rating = {a.stats.rating}
         reviews = {a.stats.reviewCount}
         country = {a.location}
         title = {a.title}
         price = {a.price}
         open = {a.openSpots}
         />)
      }
   )
  return (
    <div className='main'>
        <img src={logo}/>
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led<br/> by one-of-a-kind hosts—all without leaving<br/>  home.
        </p>
        <ul>
            {newcard}
        </ul>
    </div>
  )
}

export default Main
{/* <li>
               <img src={img1}/> 
               <p><img src={star}/> <span className='light'>5.0 (6) USA</span></p>
               <p>Life lessons with Katie Zaferes
               </p>
               <p><span className='bold'>From $136</span> / person
               </p>
            </li>
            <li>
               <img src={img2}/>
               <p><img src={star}/> <span className='light'>5.0 (30) USA</span></p>
               <p>Learn wedding photography
               </p>
               <p><span className='bold'>From $125</span> / person
               </p>
            </li>
            <li>
               <img src={img3}/> 
               <p><img src={star}/> <span className='light'>4.8 (2) USA</span></p>
               <p>Group Mountain Biking
               </p>
               <p><span className='bold'>From $50</span> / person
               </p>
            </li> */}
