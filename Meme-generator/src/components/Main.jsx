import React, {useState} from "react";
import btn from "../assets/button.png";
import "./Main.css";
import datas from "../assets/Data.js"
function Main() {
  const [memedata, setmemedata] =useState(datas)
  let randomimg = memedata.data.memes[Math.floor(Math.random()*(memedata.data.memes.length))].url
  const [meme, setmeme]= useState({
    top : " ",
    bottom : " ",
    image : randomimg
  })
  function generate(){
    let randomim = memedata.data.memes[Math.floor(Math.random()*(memedata.data.memes.length))].url
    setmeme((prevmeme) => {
      return {
        ...prevmeme,
        image : randomim
      }
  })
  }
  function write(){
    setmeme((prevmeme) => {
      return {
        ...prevmeme,
        top: document.getElementById('top').value
      }
    })
  }
  function writel(){
    setmeme((prevmeme) => {
      return {
        ...prevmeme,
        bottom: document.getElementById('bel').value
      }
    })
  }
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
        <p className="top">{meme.top}</p>
            <img src={meme.image}/>
          <p className="bot">{meme.bottom}</p>
        </div>
    </div>
  );
}

export default Main;
