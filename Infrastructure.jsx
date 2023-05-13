import React, { useEffect } from "react";
import Infradetail from "../component/Sdata";



const Infrastructure = () => {

  return (
    <>
    
      <div className="bg-gray-100 ">
        
        {/* Card section */}
        <div className="container mx-auto">
          <div className=" grid content-start  grid-cols-1 md:grid-cols-2 justify-start self-start items-start  cards row-start-1 col-start" >
            {Infradetail.map((title) => (
              <div
                className="drop-shadow-lg m-5 shadow-blue-500/20 bg-white border rounded-b-md" data-aos="zoom-in-up"data-aos-duration="1500"
                key={title.id}
               
              >
                {title.image ? (
                  <img
                    src={title.image}
                    width="960"
                    alt="Infra"
                    height="500"
                    layout="responsive"
                    className="w-full h-full border rounded-t-md"
                  />
                ) : (
                  <iframe
                    // width="600"
                    // height="310"
                    className=" w-full h-[250px] sm:h-[400px] border rounded-t-md"
                    src="https://www.youtube.com/embed/hcFsDAwmO9A"
                    title="YouTube video player"
                    allow="accelerometer;
                    autoplay; clipboard-write; encrypted-media;
                     gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                )}

                <div className="p-5">
                  <h3 className="text-blue-900 text-lg font-semibold">
                    {title.title}
                  </h3>
                  <p className="text-gray-500">{title.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Infrastructure;