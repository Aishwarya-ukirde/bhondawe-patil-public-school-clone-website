


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";




import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


import  baseurl from '../assest/slide-1.jpg'
import  baseurl1 from '../assest/slide-2.jpg'
import  baseurl2 from '../assest/slide-3.jpg'
import  baseurl3 from '../assest/slide-4.jpg'


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/Styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       <SwiperSlide>  <img src={baseurl} alt="" /></SwiperSlide>
        <SwiperSlide>  <img src={baseurl1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={baseurl2} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={baseurl3} alt="" /></SwiperSlide>
       
      </Swiper>
    </>
  );
}
