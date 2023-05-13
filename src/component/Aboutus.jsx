import React, { useState, useEffect } from "react";

import bga from '../assest/about-bg.jpg'
import Philosophy from "../component/Philosophy";
// import SubPageHeader from "../components/SubPageHeader";

import Chairman from "./Chairman";
import Missionvision from "./Missionvision";
import Principal from "./Principal";

export default function Aboutus1() {  
   
  const [active, setActive] = useState("mission");
  return (
    <>
      
      <div className="bg-gray-200">
        {/* <SubPageHeader title="About Us" /> */}
        <img src={bga} Alt=''/>

        </div>

        <div className="container mx-auto grid grid-cols-1  md:grid-cols-8 py-10 space-x-0 md:space-x-3 bg-gray-100">
          <div className="p-3 bg-white space-y-2 content-start grid md:col-span-2 border-2 rounded-md">
            <button
              onClick={() => setActive("mission")}
              className={`border-2 p-2 text-blue-900 font-bold  border-gray-100 rounded-md w-full default:focus:bg-blue-900 focus:bg-blue-900 focus:text-white focus:border-blue-900 ${active === "mission"? 'bg-blue-900 text-white' :'bg-white' }`}
            >
              {" "}
              Mission &amp; Vision
            </button>
            <button
              onClick={() => setActive("philosophy")}
              className="border-2 p-2 text-blue-900 font-bold  border-gray-100 rounded-md w-full focus:bg-blue-900 focus:text-white focus:border-blue-900"
            >
              {" "}
              Philosophy
            </button>
            <button
              onClick={() => setActive("chairman")}
              className="border-2 p-2 text-blue-900 font-bold  border-gray-100 rounded-md w-full focus:bg-blue-900 focus:text-white focus:border-blue-900"
            >
              Chairman&apos;s Desk
            </button>
            <button
              onClick={() => setActive("director")}
              className="border-2 p-2 text-blue-900 font-bold  border-gray-100 rounded-md w-full focus:bg-blue-900 focus:text-white focus:border-blue-900"
            >
              Principal&apos;s Desk
            </button>
            
          </div>
          <div className=" grid mx-auto md:col-span-6 md:row-span-2 border-1 rounded-md bg-white">
            {active === "mission" && (
              <div
              data-aos="fade-in"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              >
                <Missionvision />
              </div>
            )}
            {active === "philosophy" && (
              <div
               data-aos="fade-in"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              >
                <Philosophy />
              </div>
            )}
            {active === "chairman" && (
              <div
               data-aos="fade-in"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out">
                
                <Chairman />
              </div>
            )}
            {active === "director" && (
              <div
               data-aos="fade-in"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out">

                <Principal />
              </div>
            )}
           
          </div>
        </div>
    
    </>
  );
}