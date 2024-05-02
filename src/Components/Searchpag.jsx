import React from "react";
import AppLayout from "./AppLayout";
import { BiSolidLike } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { BsFillChatTextFill } from "react-icons/bs";
function Searchpag() {
  return (
    <div>
      <AppLayout>
        <div className="my-10">
          <div class="grid grid-cols-3 gap-4 border-[2px] px-2 py-2 rounded">
            <div class="...">
              <img
                src="https://cdn.pixabay.com/photo/2023/06/05/22/25/indian-man-8043472_1280.jpg"
                alt="Lodinge..."
                className="rounded lg:h-[250px] lg:w-[200px]"
              />
            </div>
            <div class="col-span-2 ... lg:ml-[-150px]">
              <div className="flex gap-2 sm:pt-2">
                <BiSolidLike className="mt-1 lg:h-[30px] lg:w-[30px]  lg:mt-[6px] " />{" "}
                <p className="font-semibold lg:text-[28px]">
                  {" "}
                  Dr. Punit Bhojani
                </p>
              </div>
              <div className="flex mt-2 gap-2">
                <div className=" flex bg-[#007A0C] w-[60px] lg:w-[150px] rounded-md text-white lg:text-[25px]">
                  <p className=" px-2 py-1 lg:pl-8 font-bold">4.7</p>
                  <FaStar className="mt-2.5  " />
                </div>
                <div className="">
                  <p className=" font-normal text-[18px] lg:text-[24px] lg:pt-[5px]">
                    236 Ratings
                  </p>
                </div>
              </div>
              <div className=" lg:text-[20px] font-medium">
                <p className="text-[12px] lg:text-[20px]">
                  Marine Lines Road Marine Lines, Mumbai
                </p>
                <p>
                  Fees: <span className="mt-1">&#8377;</span>1000
                </p>
                <div className="flex">
                  <p className="text-[12px] font-semibold lg:text-[20px]">
                    88 Enquires
                  </p>
                </div>
              </div>
            </div>
            <div className=" lg:mt-[-50px] lg:ml-[250px]">
              <div className="flex gap-2 ">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex gap-1 ">
                  <IoCall className="mt-1 " /> Now
                </button>
                <div className=" ">
                  <button class="border-blue-500 border-2 text-black font-bold py-2 px-4 rounded">
               Enqulry 
                  </button>
                </div>
                <div className=" ">
                  <button class="border-[#007A0C] border-2 text-black font-bold py-2 px-4 rounded flex gap-1">
                   < BsFillChatTextFill className="mt-1.5 text-[#007A0C]"/>Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  );
}

export default Searchpag;
