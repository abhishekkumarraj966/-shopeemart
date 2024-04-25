import React from "react";
import AppLayout from "./AppLayout";

const GetTouch = () => {
  return (
    <AppLayout>
      <div className="sm:py-10  py-8 sm:pt-20 bg-[#352B3D] mt-4 sm:rounded-xl  my-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 ">
          <div className=" p-4 ">
            <div className=" ">
              <h1 className=" lg:mx-16 text-start  font-bold sm:text-[40px] text-[30px] pl-2 tracking-[1px] sm:leading-[50px] leading-[38px] ">
                <span className="text-white">get Touch With </span>
                <span className="text-[#B190CD]">ShopeeMart </span>
                <span className="text-white">To increase Your Business</span>
              </h1>
              <p className="mt-1 sm:mt-2 lg:mt-2 text-[#fff] tracking-[0.5px] pl-2 text-[10px] sm:text-[12px] md:text-[10px] mx-2 sm:leading-[25px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Dictumst amet ,metus , sit massa posuere maecenas. At Tellus ut
                nunc amet vel egestas.
              </p>
            </div>
          </div>

          <div className="p-4 sm:mx-3 mx-[10px] ">
            <div className="sm:w-[80%] ">
            <p className="text-white">Name</p>
            <input
              type="text"
              placeholder="Name"
              className=" w-full rounded-md h-8 py-1 px-2 mt-1"
            />
            <p className="text-white mt-2">Email.</p>
            <input
              type="email"
              placeholder="abcd@gmail.com"
              className="w-full rounded-md h-8 py-1 px-2 mt-1"
            />
            <p className="text-white mt-2">Phone</p>
            <input
              type="tel"
              placeholder="620XXXX083"
              className=" w-full rounded-md h-8 py-1 px-2 mt-1"
            />
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                // checked={isChecked}
                // onChange={handleCheckboxChange}
                className="rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />

              <label htmlFor="checkbox" className="ml-2 text-white">
                Subscribe to the newsletter
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#BF9BDE] w-full text-white rounded-md py-2 px-3 mt-4 font-medium"
            >
              Submit
            </button>
          </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default GetTouch;
