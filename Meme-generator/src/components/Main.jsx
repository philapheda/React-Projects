import React from "react";
import btn from "../assets/button.png";
import "./Main.css";
function Main() {
  return (
    <div className="Main">
      <div className="fields">
        <div className="field">
          <label>Top text</label>
          <input placeholder="  Shut up" type="text"></input>
        </div>
        <div className="field">
          <label>Bottom text</label>
          <input placeholder="  And take my money" type="text"></input>
        </div>
        <button>
          <img src={btn} />
        </button>
      </div>
    </div>
  );
}

export default Main;
