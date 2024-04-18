import React from "react";
import AppLayout from "./AppLayout";
import star from "./assites/Star.svg";
const Feedback = () => {
  return (
    <div className="">
      <AppLayout>
        <div className="sm:py-10  py-8 sm:pt-20 bg-[#352B3D] mt-4 rounded-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 ">
            <div className=" p-4 ">
              <div className="">
                <h1 className=" text-start  font-bold sm:text-[30px] text-[20px] pl-4 tracking-[2px] sm:leading-[20px] leading-[15px]">
                  <span className="text-white">Give</span>{" "}
                  <span className="text-[#B190CD]">Valuable</span>
                </h1>
                <h1 className=" text-start  font-bold sm:text-[30px] text-[20px] pl-4 tracking-[2px] sm:leading-[50px] leading-[30px]">
                  {" "}
                  <span className="text-white">Feedback!</span>
                </h1>
                <p className="mt-4 sm:mt-10 lg:mt-14 text-[#fff] tracking-[0.5px] pl-2 text-[15px] md:text-[20px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sagittis sed ptibus liberolectus nonet psryroin. Amet sed
                </p>
              </div>
            </div>

            <div className="p-4 mx-3 sm:mt-[-60px]">
              <p className="text-white">Name</p>
              <input
                type="text"
                placeholder="Name"
                className=" w-[80%] rounded-md h-8 py-1 px-2 mt-1"
              />
              <p className="text-white mt-5">Feedback</p>
              <input
                type="text"
                placeholder="Type your message..."
                className=" w-[80%] rounded-md h-14 lg:h-24 px-2 mt-1"
              />
              <p className="text-white mt-5">Rating</p>
              <div className="flex gap-1.5">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <button
                type="submit"
                className="bg-[#BF9BDE] w-[80%]  text-white rounded-md py-2 px-3 mt-4 font-medium"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className=" mt-16 my-6 flex  py-4  sm:justify-between justify-center md:justify-space flex-wrap mx-auto">
          <div className="mt-2 my-2  h-[200px] w-[350px]  sm:w-[380px] bg-[#352B3D] text-[#e9e9e9] rounded-xl">
            <h1 className=" pt-2 px-3  text-[15px] font-sans">
              I was very impressed with the customer service that I received
              from your company. Everyone was friendly and helpful, and they
              went out of their way to make sure that I was happy with my new
              website.
            </h1>
            <div className="pt-4 pl-[170px]">
              <div className="flex gap-0.5">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <h1 className="text-[16px] font-semibold pl-10">
                -Deepak Khurana
              </h1>
            </div>
          </div>

          <div className="mt-2 my-2  h-[200px] w-[350px]  sm:w-[380px] bg-[#352B3D] text-[#e9e9e9] rounded-xl">
            <h1 className=" pt-2 px-3  text-[15px] font-sans">
              I was very impressed with the customer service that I received
              from your company. Everyone was friendly and helpful, and they
              went out of their way to make sure that I was happy with my new
              website.
            </h1>
            <div className="pt-4 pl-[170px]">
              <div className="flex gap-0.5">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <h1 className="text-[16px] font-semibold pl-10">
                -Deepak Khurana
              </h1>
            </div>
          </div>
          <div className="mt-2 my-2  h-[200px] w-[350px]  sm:w-[380px] bg-[#352B3D] text-[#e9e9e9] rounded-xl">
            <h1 className=" pt-2 px-3  text-[15px] font-sans">
              I was very impressed with the customer service that I received
              from your company. Everyone was friendly and helpful, and they
              went out of their way to make sure that I was happy with my new
              website.
            </h1>
            <div className="pt-4 pl-[170px]">
              <div className="flex gap-0.5">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <h1 className="text-[16px] font-semibold pl-10">
                -Deepak Khurana
              </h1>
            </div>
          </div>
          <div className="mt-2 my-2  h-[200px] w-[350px]  sm:w-[380px] bg-[#352B3D] text-[#e9e9e9] rounded-xl">
            <h1 className=" pt-2 px-3  text-[15px] font-sans">
              I was very impressed with the customer service that I received
              from your company. Everyone was friendly and helpful, and they
              went out of their way to make sure that I was happy with my new
              website.
            </h1>
            <div className="pt-4 pl-[170px]">
              <div className="flex gap-0.5">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <h1 className="text-[16px] font-semibold pl-10">
                -Deepak Khurana
              </h1>
            </div>
          </div>
          <div className="mt-2 my-2  h-[200px] w-[350px]  sm:w-[380px] bg-[#352B3D] text-[#e9e9e9] rounded-xl">
            <h1 className=" pt-2 px-3  text-[15px] font-sans">
              I was very impressed with the customer service that I received
              from your company. Everyone was friendly and helpful, and they
              went out of their way to make sure that I was happy with my new
              website.
            </h1>
            <div className="pt-4 pl-[170px]">
              <div className="flex gap-0.5">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <h1 className="text-[16px] font-semibold pl-10">
                -Deepak Khurana
              </h1>
            </div>
          </div>
          <div className="mt-2 my-2  h-[200px] w-[350px]  sm:w-[380px] bg-[#352B3D] text-[#e9e9e9] rounded-xl">
            <h1 className=" pt-2 px-3  text-[15px] font-sans">
              I was very impressed with the customer service that I received
              from your company. Everyone was friendly and helpful, and they
              went out of their way to make sure that I was happy with my new
              website.
            </h1>
            <div className="pt-4 pl-[170px]">
              <div className="flex gap-0.5">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <h1 className="text-[16px] font-semibold pl-10">
                -Deepak Khurana
              </h1>
            </div>
          </div>
          
        </div>
      </AppLayout>
    </div>
  );
};

export default Feedback;
