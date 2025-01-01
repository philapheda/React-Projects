import React, { useState } from "react";
import {assets} from '../assets/assets'
function Nav() {
  const [isOpen, setisOpen] = useState(false)
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <div className="flex gap-1 items-center"> 
          <img className="w-[40px]" src={assets.logo} alt="logo" />
          <h1 className = "px-4 py-2 rounded-full text-white text-lg">Real estate</h1>
      </div>
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="px-4 py-2 rounded-full">Home</a>
          <a href="#Header" className="px-4 py-2 rounded-full">About</a>
          <a href="#Header" className="px-4 py-2 rounded-full">Projects</a>
          <a href="#Header" className="px-4 py-2 rounded-full">Testimonials</a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">Sign Up</button>
        <img onClick = {()=> setisOpen(true)}  src = {assets.menu_icon} className="md:hidden w-6 cursor-pointer"/>
      </div>
      <div className= {isOpen ? `md:hidden fixed w-50% right-0 top-0 rounded-l-lg shadow-lg bg-white transition-all`: 'hidden'}>
      <div className="flex justify-end cursor-pointer">
        <button onClick={()=> setisOpen(false)}><img  src = {assets.cross_icon} className="md:hidden w-7 mt-2 mr-3 hover:bg-red-400 py-2 px-2"/></button>
      </div>
      <ul className="flex flex-col items-center gap-2 mt-3 px-5 text-md font-medium">
          <a onClick={()=> setisOpen(false)} href="#Header" className="px-4 py-2 rounded-full">Home</a>
          <a onClick={()=> setisOpen(false)} href="#About" className="px-4 py-2 rounded-full">About</a>
          <a onClick={()=> setisOpen(false)} href="#Projects" className="px-4 py-2 rounded-full">Projects</a>
          <a onClick={()=> setisOpen(false)} href="#Testimonials" className="px-4 py-2 rounded-full mb-3">Testimonials</a>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
