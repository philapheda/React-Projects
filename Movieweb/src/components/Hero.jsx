import React from "react";
import "./Hero.css";
import back from "../assets/back2.jpg";
export default function Hero() {
  return (
    <div className="hero">
      <img src={back} />
      <h1>Welcome to MovieWeb</h1>
      <p>
        Your ultimate destination for non-stop action!
        <br /> Get ready to experience heart-pounding thrills and explosive
        stunts.
      </p>
    </div>
  );
}
