import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="Footer">
      <div>
        <h1>Contact Us</h1>
        <ul>
          <li>
            <a href="www.twitter.com">
              {" "}
              <i class="fa-brands fa-twitter"></i> X
            </a>
          </li>
          <li>
            <a href="www.instagram.com">
              {" "}
              <i class="fa-brands fa-instagram"></i> Instagram
            </a>
          </li>
          <li>
            <a href="www.telegram.com">
              {" "}
              <i class="fa-brands fa-telegram"></i> Telegram
            </a>
          </li>
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
