import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
function App() {
  return (
    <div className="whole">
      <Nav />
      <Main />
    </div>
  );
}

export default App;
