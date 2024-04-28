import React from "react";
import img1 from "./assites/1.png";
import img2 from "./assites/2.png";
import img3 from "./assites/3.png";
import img4 from "./assites/4.png";
import img5 from "./assites/5.png";
import img6 from "./assites/6.png";
import img7 from "./assites/7.png";

import AppLayout from "./AppLayout";

const HowItWorks = () => {
  return (
    <div className=" bg-[#352B3D] py-5 lg:h-[2100px] sm:h-full">
      <AppLayout>
        <h1 className="text-center text-white text-4xl font-bold pt-8 ">
          How it Works ?
        </h1>
        <div className="flex flex-col  mt-10">
          <div className=" flex justify-start">
            {/* image which you download is not perfect size fix it size first */}
            <div>
            <img src={img1} alt="" className=" h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[400px] lg:ml-[150px]  ml-[30px]" />
            </div>
            <div>
            <img src={img7} alt="" className="h-[150px] sm:w-[150px] sm:h-[300px] lg:w-[400px] lg:h-[600px] lg:mt-[300px] sm:mt-[250px] sm:ml-[50px] lg:ml-24 mt-[150px] ml-[20px] "  />
            </div>
            <div>
            <img src={img4} alt="" className="h-[150px] sm:w-[200px] sm:h-[250px] lg:w-[300px]  lg:h-[300px] sm:mt-[-100px] lg:ml-[80px] ml-[4px] mt-[-50px]" />
            </div>
          </div>
          <div className=" flex justify-between">
            <div className=" self-center">
            <img src={img6} alt="" className=" h-[80px] sm:w-[250px] sm:h-[200px] lg:w-[320px] lg:h-[320px] sm:mt-[-150px]  lg:mt-[-350px] lg:ml-16 mt-[-150px] ml-10" />
            </div>
            <div>
            <img src={img2} alt="" className="h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] lg:mt-[-100px] lg:mr-[190px] sm:mt-[-70px] sm:mr-32  mt-[-20px] mr-[25px] " />
            </div>
            {/* see what you can do you can put this div after h1 tag and then use position fix there size  */}
            <div className="absolute">
            <img src={img7} alt="" className="h-[200px] sm:w-[300px] sm:h-[400px] lg:w-[300px] lg:h-[400px] sm:ml-[350px] mt-[170px] ml-[90px] lg:ml-[570px] lg:mt-[300px]" />
            </div>
          </div>
          <div className=" flex justify-between">
            <div >
            <img src={img3} alt="" className="h-[200px] sm:w-[350px] sm:h-[400px] sm:mt-[200px] sm:ml-[90px] lg:w-[400px] lg:h-[500px] lg:mt-[190px] lg:ml-[200px] mt-[140px]" />
            </div>
            <div className=" self-center">
            <img src={img5} alt="" className=" h-[70px] sm:w-[250px] sm:h-[300px] lg:w-[400px] lg:h-[300px] mr-[70px]  lg:ml-[150px] sm:mt-[420px] lg:mt-[400px]" />
            </div>
          </div>
          
        </div>
      </AppLayout>
    </div>
  );
};

export default HowItWorks;
