import React, {useState} from "react";
import btn from "../assets/button.png";
import "./Main.css";
import datas from "../assets/Data.js"
function Main() {
  let randomimg = datas.data.memes[Math.floor(Math.random()*(datas.data.memes.length))].url
  let [image, setimage] =  useState(randomimg)
  function generate(){
    let randomim = datas.data.memes[Math.floor(Math.random()*(datas.data.memes.length))].url
    setimage(randomim)
  }
  let [top, settop] = useState("")
  let [below, setbelow] = useState("")
  function write(){
    settop(document.getElementById('top').value)
  }
  function writel(){
    setbelow(document.getElementById('bel').value)
  }
  console.log("hi")
 return (
    <div className="Main">
      <div className="fields">
        <div className="field">
          <label>Top text</label>
          <input placeholder="  Shut up" type="text" id = "top" onKeyDown={write}></input>
        </div>
        <div className="field">
          <label>Bottom text</label>
          <input placeholder="  And take my money" type="text" id = "bel"  onKeyDown={writel}></input>
        </div>
        <button>
          <img src={btn} onClick={generate}/>
        </button>
      </div>
      <div className="image">
        <p className="top">{top}</p>
            <img src={image}/>
          <p className="bot">{below}</p>
        </div>
    </div>
  );
}

export default Main;
