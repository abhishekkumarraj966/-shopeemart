import React from "react";
import img1 from "./assites/2-1@2x.png";
import img2 from "./assites/3@2x.png";
import img3 from "./assites/2@2x.png";
import arrow from "./assites/4@2x.png";
import AppLayout from "./AppLayout";

const HowItWorks = () => {
  return (
    <div className=" bg-[#352B3D] py-5">
      <AppLayout>
        <h1 className="text-center text-white text-4xl font-semibold ">
          How it Works ?
        </h1>
        <div className="flex flex-col ">
          <div className=" flex justify-start">
            {/* image which you download is not perfect size fix it size first */}
            <div>
            <img src={img1} alt="" className="w-[800px] h-[900px]" />
            </div>
            <div>
            <img src={arrow} alt="" className="w-[800px] h-[900px]" />
            </div>
          </div>
          <div className=" flex justify-between">
            <div className=" self-center">
            <img src={img2} alt="" className="w-[400px] h-[500px]" />
            </div>
            <div>
            <img src={img1} alt="" className="w-[800px] h-[900px]" />
            </div>
            {/* see what you can do you can put this div after h1 tag and then use position fix there size  */}
            <div className=" absolute left-[300px]">
            <img src={arrow} alt="" className="w-[800px] h-[900px]" />
            </div>
          </div>
          <div className=" flex justify-between">
            <div >
            <img src={img1} alt="" className="w-[800px] h-[900px]" />
            </div>
            <div className=" self-center">
            <img src={img3} alt="" className="w-[600px] h-[300px]" />
            </div>
          </div>
          
        </div>
      </AppLayout>
    </div>
  );
};

export default HowItWorks;
