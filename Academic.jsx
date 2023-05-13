import React, { useState, } from "react";



// import SubPageHeader from "../components/SubPageHeader";


import Early from "./Early";
import The from "./The";
import Growing from "./Growing";

export default function Academic() {  
   
  const [active, setActive] = useState("Early");
  return (
    <>
      
      <div className="bg-gray-200">
                <div className="bg-gray-100 py-10 shadow-sm mb-10 bg-[url('https://bhondawepatilschool.in/images/subheaderbg.jpg')] "><h1 className=' container mx-auto font-bold text-4xl text-center text-blue-900 'data-aos="fade-down">Academic</h1>
                </div>

        <div >
          <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center mx-5 '>
            <button
              onClick={() => setActive("Early")}
              className={`border-2 p-4 text-[14px] md:text-lg text-blue-900 font-bold border-blue-900 w-full focus:bg-blue-900 focus:text-white focus:border-blue-900 md:border-r-0 ' }`}
            >
              {" "}
              EARLY  &amp; YEARS PROGRAMME
            </button>
            <button
              onClick={() => setActive("The")}
              className="border-2 p-4 text-[14px] md:text-lg text-blue-900 font-bold border-blue-900 w-full focus:bg-blue-900 focus:text-white focus:border-blue-900 md:border-r-0 "
            >
              {" "}
              THE FOUNDATION YEARS PROGRAMME
            </button>
            <button
              onClick={() => setActive("Growing")}
              className="border-2 p-4 text-[14px] md:text-lg text-blue-900 font-bold border-blue-900 w-full focus:bg-blue-900 focus:text-white focus:border-blue-900 "
            >
             GROWING YEARS PROGRAMME 
            </button>
           
          </div>
          <div className='grid grid-cols-1 items-center justify-center rounded-md mt-10 md:mx-40 mx-10'>
            {active === "Early" && (
             
                <Early />
              
            )}
            {active === "The" && (
              
                <The />
            )}
            {active === "Growing" && (
              
                
                <Growing />
            )}
            
           
          </div>
        </div>
    </div>
    </>
  );
}