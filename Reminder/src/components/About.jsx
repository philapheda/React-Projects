import React from "react";
import {assets} from "../assets/assets";
function About() {
  return(
  <div className="flex flex-col items-center justify-center mt-10 gap-4" id="About">
  <h1 className="text:2xl sm:text-4xl"><span className="font-bold">About</span> <span className="font-extralight underline underline-offset-2 decoration-1">Our Brand</span></h1>
  <p className="text-gray-500 text-center">Passionate About Properties, Dedicated to <br/>Your Vision</p>
  <div className="flex flex-col md:flex-row items-center justify-center w-4/5">
    <img className = "w-1/2 h-auto" src={assets.brand_img} alt="" /> 
    <div className="flex flex-col items-center justify-center">
      <div className="w-3/4 grid grid-cols-2 mt-10 gap-12 md:gap-8">
      <div>
        <p className="text-4xl font-bold">10+</p>
        <p className="text-lg text-gray-600">Years of Excellence</p>
      </div>
      <div>
        <p className="text-4xl font-bold">12+</p>
        <p className="text-lg text-gray-600">Projects Completed</p>
      </div>
      <div>
        <p className="text-4xl font-bold">20+</p>
        <p className="text-lg text-gray-600">Mn. sq. Ft. Delivered</p>
      </div>
      <div>
        <p className="text-4xl font-bold">25+</p>
        <p className="text-lg text-gray-600">Ongoing Projects</p>
      </div>
    </div>
    <p className="mt-10 w-3/4 text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere culpa temporibus officia sunt sit perferendis, non dicta ullam saepe cupiditate illum, autem alias eum illo sapiente, obcaecati corrupti. Dicta, illum.</p>
    <button className="text-white bg-blue-600 px-8 py-3 rounded-md mt-10">Learn More</button>
    </div>
  </div>
  </div>);
}

export default About;
