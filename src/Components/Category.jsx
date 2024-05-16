import React from "react";
import AppLayout from "./AppLayout";
import bug from "./assites/Burgur.png";
import Catgry from "./Mock/Catgry";



import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Category = () => {
  return (
    <div className=" my-8">
         <h1 className="text-center font-bold text-4xl text-[#000] tracking-1 sm:tracking-2 font-serif mb-8">
        Category's
      </h1>
      <AppLayout>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          340: {
            slidesPerView: 3,
            spaceBetween: 1,
          },
          540: {
            slidesPerView: 5,
            spaceBetween: 4,
          },
          750: {
            slidesPerView: 7,
            spaceBetween: 5,
          },
        }}
        
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
       {Catgry.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="my-8 flex sm:gap-4 gap-2 mx-2">
            <div className="sm:w-[350px] w-[82px] h-[120px] sm:h-[150px] bg-[#E0E0E0] rounded-md shadow">
              <div className="flex flex-col justify-center items-center text-center">
                <img
                  src={bug} // Use item.imgSrc for the image source
                  alt={item.text} // Use item.text for the alt text
                  className="lg:mx-[40%] sm:mx-[35%] mx-[20%] py-[15px] sm:h-[80px] sm:w-[50px] w-[50px] h-[70px]"
                />
                <h1 className="pt-[-7px] lg:text-[20px] sm:text-[18px] text-[15px] font-bold sm:font-semibold">
                  {item.text}
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
        
      </Swiper>






       
      </AppLayout>
    </div>
  );
};

export default Category;
