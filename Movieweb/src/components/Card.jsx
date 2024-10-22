import React from "react";
import "./Card.css";
export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} />
      <h1>{props.title}</h1>
      <p>{props.year}</p>
    </div>
  );
}
