import React from "react";
import AppLayout from "./AppLayout";
import spmart from "./assites/spMart.png";
import { Link } from "react-router-dom";
const Shopymart = () => {
  return (
    <div className="bg-[#000]">
      <AppLayout>
        <div className="py-10">
          <h1 className="text-center font-bold text-[30px] text-[#fff] tracking-[2px] sm:tracking-[5px]  font-serif">
          Why Bizzata ? 
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 mt-4 ">
            <div className=" p-4 col-span-2">
              <div className="">
                <p className="mt-4 sm:mt-10 lg:mt-14 text-[#fff] tracking-[0.5px] pl-2 text-[14px] md:text-[16px]">
                 Bizzata stands out in the competitive landscape as
                  a comprehensive listing platform and e-commerce hub,
                  revolutionizing the way businesses operate online. Unlike
                  traditional platforms, Bizzata consolidates all facets of
                  business management onto a single, user-friendly interface.
                  From product listings to service appointments, Bizzata
                  empowers businesses with unparalleled convenience and
                  efficiency. Whether you're a small retailer or a burgeoning
                  entrepreneur, Bizzata streamlines operations and maximizes
                  exposure, ensuring your offerings reach the widest audience
                  possible. At the core of Bizzata's appeal lies its commitment
                  to affordability without compromising on quality. By
                  centralizing resources and eliminating unnecessary overheads,
                  Bizzata passes on the savings to its users, making it an
                  attractive option for businesses of all sizes. In essence,
                  Bizzata isn't just a platform—it's a game-changer. With its
                  innovative approach and dedication to customer satisfaction,
                  Bizzata is poised to reshape the digital marketplace
                  landscape, one transaction at a time.
                
                </p>
                <div className="flex pt-10 gap-14">
                  <Link to="/aboutus">
                    <p className="bg-[#4b4155] w-[140px] sm:w-[200px]   rounded-md py-2 px-3 font-medium cursor-pointer">
                      Know More
                    </p>
                  </Link>
                  <Link to="/signeup">
                    <p className="bg-[#52445f] w-[140px] sm:w-[200px]   rounded-md py-2 px-3 font-medium cursor-pointer">
                      Let's Start
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-4">
              <img
                src={spmart}
                alt=""
                className="mt-[-40px] lg:mt-[-50px] sm:mt-[20px] h-[335px] sm:h-[400px] lg:h-[400px] w-[110%]"
              />
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default Shopymart;
