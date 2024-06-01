import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaLocationDot } from "react-icons/fa6";
import { GrSearch } from "react-icons/gr";
import { FaCircleArrowUp } from "react-icons/fa6";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import slider from "./Mock/Slider";
import AppLayout from "./AppLayout";
const Hero = () => {
  return (
    <div>
      <AppLayout>
        <div className="mx-4">
        <div className="py-4 pt-10 ">
          <h2 className="pb-2 text-[28px] font-bold ">Search Your  <span className="text-purple-700">Business</span></h2>
          <div className="flex gap-2 sm:gap-4">
          <div className="relative flex  border-2 border-[#b485db] rounded md:w-max">
            <input
              //   type="search"
              color="black"
              label="Type here..."
              className=" w-[130px] sm:w-[240px] font-semibold lg:w-[400px] pr-[25px] h-[30px] px-1"
              placeholder="Locations"
            />
            <button
              size="sm"
              color="white"
              className="!absolute right-2 top-1 rounded"
            >
              <FaLocationDot className="w-[20px] h-[20px] font-bold  text-purple-700" />
            </button>
          </div>
          <div className="relative flex  border-2 border-[#b99bd1] md:w-max rounded">
            <input
              type="search"
              color="black"
              label="Type here..."
              className=" w-[180px] sm:w-[430px] lg:w-[500px] pr-[35px] h-[30px] font-semibold px-1"
              placeholder="Estate Agents"
            />
            <button
              size="md"
              color="white"
              className="!absolute right-2 top-1 rounded"
            >
              <GrSearch className="w-[20px] h-[25px] font-bold text-purple-700 " />
            </button>
          </div>
          </div>
        </div>
        </div>
      </AppLayout>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {slider.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.img}
              alt={image.alt}
              className="w-full h-auto object-cover rounded-md mb-3 shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
