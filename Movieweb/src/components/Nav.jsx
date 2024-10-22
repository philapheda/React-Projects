import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./Nav.css";
import { useRef } from "react";

export default function Nav(props) {
  const val = useRef();

  function search() {
    const searchValue = val.current.value;
    props.change(searchValue);
  }
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
          <li>Tv Series</li>
          <li>Documentary</li>
          <li>Blogs</li>
          <li>Shop</li>
        </ul>
      </div>
      <div className="search">
        <ul>
          <li>
            <input type="text" placeholder="search" id="search" ref={val} />
          </li>
          <li>
            <button onClick={search}>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
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
