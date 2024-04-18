import React from "react";
import AppLayout from "./AppLayout";
import spmart from "./assites/spMart.png"
const Shopymart = () => {
  return (
    <div className="bg-[#352B3D]">
      <AppLayout>
        <div className="py-10">
          <h1 className="text-center font-bold text-[30px] text-[#fff] tracking-[2px] sm:tracking-[5px]  font-serif">
            Why ShopeeMart
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 mt-4 ">
            <div className=" p-4 col-span-2">
              <div className="">
                <h1 className=" text-start text-[#B190CD] font-bold sm:text-[30px] text-[20px] pl-4 tracking-[2px] sm:leading-[20px] leading-[15px]">
                  Shopeemart Heading
                </h1>
                <p className="mt-4 sm:mt-10 lg:mt-14 text-[#fff] tracking-[0.5px] pl-2 text-[15px] md:text-[20px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sagittis sed ptibus liberolectus nonet psryroin. Amet sed
                  lorem posuere sit iaculis amet, ac urna. Adipiscing fames
                  semper erat ac in suspendisse iaculis. Amet blandit tortor
                  praesent ante vitae. A, enim pretiummi senectus magna.
                  Sagittis sed ptibus liberolectus non et psryroin.
                </p>
                <div className="flex pt-10 gap-14">
                    <p className="bg-[#BF9BDE] w-[300px]   rounded-md py-2 px-3 font-medium">Know More</p>
                    <p className="bg-[#BF9BDE] w-[300px]   rounded-md py-2 px-3 font-medium">Let's Start</p>
                </div>
              </div>
            </div>

            <div className="p-4">
                <img src={spmart} alt="" 
                className="mt-[-50px] h-[400px] sm:h-[380px] lg:h-[400px] w-[110%]"
                />
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default Shopymart;
