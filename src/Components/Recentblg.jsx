import AppLayout from "./AppLayout";
import slidesData from "./Mock/Blog";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

const Recentblg = () => {
  return (
    <AppLayout>
      <div className=" my-4 ">
        <h1 className="text-center font-bold text-[40px] text-[#000] tracking-[1px] sm:tracking-[2px]  font-serif">
          Our Recent Blog's
        </h1>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="w-[300px] rounded-md border shadow-xl">
                <img
                  src={slide.imageSrc}
                  alt="Laptop"
                  className="h-[200px] w-full rounded-t-md object-cover"
                />
                <div className="py-4 pb-10 px-2">
                  <div className="flex gap-[20%] pb-1">
                    <p className="text-[10px] font-extralight">{slide.date}</p>
                    <p className="text-[10px] font-extralight">
                      {slide.category}
                    </p>
                  </div>
                  <h1 className="inline-flex items-center text-lg font-bold tracking-[0.5px]">
                    {slide.title}
                  </h1>
                  <p className="mt-3 text-sm text-gray-600 tracking-[.5px] leading-[24px]">
                    {slide.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </AppLayout>
  );
};

export default Recentblg;


// <div className=" flex gap-4 mt-6">
// {data.map((item, index) => (
//   <div key={index} className="w-[300px] rounded-md border shadow-xl">
//     <img
//       src={item.imageSrc}
//       alt="Laptop"
//       className="h-[200px] w-full rounded-t-md object-cover"
//     />
//     <div className="py-4 pb-10 px-2">
//       <div className="flex gap-[20%] pb-1">
//         <p className="text-[10px] font-extralight">{item.date}</p>
//         <p className="text-[10px] font-extralight">{item.category}</p>
//       </div>
//       <h1 className="inline-flex items-center text-lg font-bold tracking-[0.5px]">
//         {item.title}
//       </h1>
//       <p className="mt-3 text-sm text-gray-600 tracking-[.5px] leading-[24px]">
//         {item.description}
//       </p>
//     </div>
//   </div>
// ))}
// </div>