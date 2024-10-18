import React from "react";
import "./Nav.css";
import logo from "../assets/Troll Face.png";
function Nav() {
  return (
    <div className="Nav">
      <div className="logo">
        <img src={logo} />
        <h1>Meme Generator</h1>
      </div>
      <p>React Course - Project 3</p>
    </div>
  );
}

export default Nav;
