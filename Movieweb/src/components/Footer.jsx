import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="Footer">
      <div>
        <h1>Contact Us</h1>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="comment">
        <h1>Comment</h1>
        <label>First Name</label>
        <input type="text" placeholder="  Firstname"></input>
        <label>Last Name</label>
        <input type="text" placeholder="  Lastname"></input>
        <label>Comment</label>
        <textarea placeholder="  Comment"></textarea>
        <button>Submit</button>
      </div>
    </div>
  );
}
