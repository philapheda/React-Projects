import React from 'react'
import star from "../assets/star.png"
function Card(props) {
    let text
    if (props.open == 0){
        text = "SOLD OUT"
    } 
    else if (props.country == "Online"){
        text = "ONLINE"
    }
    console.log(props.country)
  return (
    <li>
    {text && <div className='badge'>{text}</div>}
    <img src={props.img}/> 
    <p><img src={star}/> <span className='light'>{props.rating} ({props.reviews}) {props.country}</span></p>
    <p>{props.title}
    </p>
    <p><span className='bold'>From ${props.price}</span> / person
    </p>
 </li>
  )
}

export default Card