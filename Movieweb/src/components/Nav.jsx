import React from "react";
import logo from "../assets/logo.png";
import "./Nav.css";
export default function Nav() {
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} />
        <h2>
          <span>MOVIE</span>WEB
        </h2>
      </div>
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>pages</li>
          <li>Blogs</li>
          <li>Shop</li>
        </ul>
      </div>
      <div className="search">
        <ul>
          <li>
            <i class="fa-solid fa-magnifying-glass"></i>
          </li>
          <li>
            <i class="fa-regular fa-bell"></i>
          </li>
          <li>
            <i class="fa-regular fa-user"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}
