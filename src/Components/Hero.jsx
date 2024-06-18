import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaLocationDot } from "react-icons/fa6";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import slider from "./Mock/Slider";
import AppLayout from "./AppLayout";
const Hero = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Location");

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
  };

  return (
    <div>
      <AppLayout>
      {/* input box */}
        <div className="lg:mx-[18%] mx-4 sm:mx-[10%]">
          <div className="py-4 pt-10 ">
            <h2 className="pb-2 text-[28px] font-bold text-center">
            Search your{" "}
              <span className="text-[#EF4444] text-[35px]">Business</span>
            </h2>
            
            <form className="max-w-lg mx-auto">
          <div className="flex gap-2 sm:gap-2">
            <div className="w-[100px] flex ">
           
            <button
              id="dropdown-button"
              onClick={toggleDropdown}
              className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
              type="button"
            >
              {selectedCategory}

              <FaLocationDot className="w-[20px] h-[20px] font-bold  text-[#EF4444] pl-2" />
            </button>
            {dropdownOpen && (
              <div
                id="dropdown"
                className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdown-button"
                >
                  {["Location", "Templates", "Design", "Logos"].map(
                    (category) => (
                      <li key={category}>
                        <button
                          type="button"
                          onClick={() => handleCategorySelect(category)}
                          className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          {category}
                        </button>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
            </div>
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Search in indore"
                required
              />
              <button
                type="submit"
                className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-[#EF4444] rounded-r-lg border border-[#EF4444] hover:bg-[#EF4444] focus:ring-4 focus:outline-none focus:ring-[#EF4444] dark:bg-[#EF4444] dark:hover:bg-[#EF4444] dark:focus:ring-[#EF4444]"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
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
           <div className="pb-4">
            <img
              src={image.img}
              alt={image.alt}
              className="w-full lg:h-[650px]  object-cover rounded-md mb-3 shadow-lg px-[2%] md:px-[.5%]"
            />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
