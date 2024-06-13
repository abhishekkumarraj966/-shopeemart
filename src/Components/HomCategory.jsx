import React from "react";
import AppLayout from "./AppLayout";
import img from "./assites/storefront.png";
import show from "./assites/ShowMore.png";
import { Link } from "react-router-dom";
const HomCategory = () => {
  return (
    <div className="my-2 mb-8">
      <AppLayout>
      <h1 className="text-center font-bold text-4xl text-[#000] tracking-1 sm:tracking-2 font-serif mb-8">
        Category's
      </h1>
        {/* mobile Screen */}
        <div className="sm:hidden block">
          <div class="grid lg:grid-cols-10 sm:grid-cols-5 grid-cols-4 gap-1 ml-[14px] ">
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
                Restaurants
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
              Hotels
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
              Beauty Spa
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
              Home Decor
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
              Education
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
              Rent & Hire
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
              Estate Agent
              </h2>
            </div>{" "}
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <Link to="/category">
                  <img
                    src={show}
                    alt=""
                    className="h-[40px] w-[40px] mx-auto mt-[15%] text-[#5F6368] rounded-md"
                  />
                </Link>
              </div>
              <Link to="/category">
                <h2 className="pt-1 font-semibold text-[14px] mx-auto text-[#F26161]">
                  Show more
                </h2>
              </Link>
            </div>
          </div>
        </div>
        {/* Tab screen */}
        <div className="hidden sm:block lg:hidden">
          <div class="grid lg:grid-cols-10 sm:grid-cols-5  gap-1 mx-4">
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
                Restaurants
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
              Hotels
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
              Beauty Spa
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
              Home Decor
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
              Education
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
              Rent & Hire
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
              Hospitals
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
              Estate Agent
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
              Dentists
              </h2>
            </div>

            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <Link to="/category">
                  <img
                    src={show}
                    alt=""
                    className="h-[40px] w-[40px] mx-auto mt-[15%] text-[#5F6368] rounded-md"
                  />
                </Link>
              </div>
              <Link to="/category">
                <h2 className="pt-1 font-semibold text-[14px] mx-auto text-[#F26161]">
                  Show more
                </h2>
              </Link>
            </div>
          </div>
        </div>
        {/* Desktop screen */}
        <div className="hidden lg:block">
          <div class="grid lg:grid-cols-10 sm:grid-cols-5  gap-1 ">
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
                Restaurants
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
              Hotel
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
              Beauty Spa
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
              Home Decor
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
              Wedding Planning
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
              Education
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
              Rent & Hire
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
              Hospitals
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
              PG/Hostels
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
              Estate Agent
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
              Dentists
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
              Gym
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
              Consultants
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
              Event Organisers
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
              Driving Schools
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
              Packers & Movers
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
              Courier Service
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
              Contractors
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <img
                  src={img}
                  alt=""
                  className="h-[40px] w-[40px] mx-auto mt-[15%]"
                />
              </div>
              <h2 className="pt-1 font-semibold text-[14px] mx-auto">
              Pet Shops
              </h2>
            </div>
            <div className=" mt-2 items-center">
              <div className="border-black border-[1px] rounded-md  h-[75px] w-[75px]">
                <Link to="/category">
                  <img
                    src={show}
                    alt=""
                    className="h-[40px] w-[40px] mx-auto mt-[15%] text-[#5F6368] rounded-md"
                  />
                </Link>
              </div>
              <Link to="/category">
                <h2 className="pt-1 font-semibold text-[14px] mx-auto text-[#F26161]">
                  Show more
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default HomCategory;
