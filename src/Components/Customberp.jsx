import React from "react";
import AppLayout from "./AppLayout";
import bup1 from "./assites/bup1.png";
const Customberp = () => {
  return (
    <div className="my-2 pt-4 mx-auto">
      <AppLayout>
        <div className="mx-4">
          <h1 className="text-center font-semibold text-[#BF9BDE] tracking-[5px]  font-serif">
            CUSTOMBER FAVORITES
          </h1>
          <div className=" mx-auto w-[270px]">
            <p className="text-center pt-2 font-bold text-[30px] leading-9 tracking-wide ">
              This Week's Top 5 Businesses{" "}
            </p>
          </div>

          <div className=" flex gap-4 py-4">
            <div className=" rounded-2xl   shadow-xl flex flex-row items-start justify-start py-1  pb-2 pr-1 pl-4 box-border relative gap-2 w-[350px] ">
              <img
                className="h-[90px] w-[110px] relative rounded-md overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src={bup1}
              />
              <div className="items-start justify-start gap-[15px]">
                <div className="items-start justify-start">
                  <div className="relative tracking-[2px] leading-[35px] font-semibold text-[20px] inline-block">
                    Hailey Food
                  </div>
                  <div className="self-stretch relative text-[16px] tracking-[0.48px]  inline-block    leading-[19px]">
                    <p className="m-0">Best food nectar you</p>
                    <p className="m-0">wish to get</p>
                  </div>
                </div>
                <div className="self-stretch  flex-1 items-end justify-end ">
                  <h2 className="relative pl-[70px] pt-[5px]   font-medium text-[14px]">
                    Gandhinagar Gujarat
                  </h2>
                </div>
              </div>
              <div className="h-12 w-12 absolute !m-[0] top-[-16px] left-[-10px] text-center text-21xl text-black bg-[#D7C1EB] rounded-full">
                <div className="absolute top-[6px] left-[10px] tracking-[0.48px] leading-[24px] font-medium flex items-center justify-center w-[25px] h-[41px] z-[2] mq450:text-5xl mq450:leading-[14px] mq825:text-13xl mq825:leading-[19px]">
                  1
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default Customberp;
