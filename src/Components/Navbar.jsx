import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import AppLayout from "./AppLayout";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <div className="md:hidden block absolute top-16 w-full left-0 right-0 bg-[#FFF]  transition-transform duration-200 transform z-40 ">
      <AppLayout>
        <ul className="text-center text-xl px-[20px] shadow-2xl  transition-transform duration-200 transform  ">
          <li className="my-4 py-4 border-black ">
            <a href="/aboutus">About Us</a>
          </li>
          <li className="my-4 py-4 border-black">
            <Link to="/pricing">Pricing</Link>
          </li>
          <li className="my-4 py-4 border-black">
            <a href="/howItWorks">How it Works</a>
          </li>
          <li className="my-4 py-4 border-black">
            <a href="/contactus">Contct</a>
          </li>
          <li className="my-4 py-4 border-black text-[#FFD323]">
            <a href="/clicknow">Sign In </a>
          </li>
          <li className="hover:text-black transition  hover:underline  cursor-pointer text-[#000] bg-[#D4CEDB] px-4 py-2 rounded-md ">
            <a href="/pricing">Make you Website</a>
          </li>
        </ul>
      </AppLayout>
    </div>
  );

  return (
    <div className="bg-[#FFFFFF] text-black">
      <AppLayout>
        <nav>
          <div className="h-16 flex justify-between z-20 text-black lg:py-5 px-[20px] py-4 ">
            <div className="flex items-center flex-1">
              <a href="/">
                <span className="text-3xl font-bold">Bizzata</span>
                {/* <img src="/" alt="comLogo" /> */}
              </a>
            </div>
            <div className="md:flex lg:flex-1 items-center justify-end font-normal hidden">
              <div className="flex-10">
                <ul className="flex gap-6 mr-16 text-[18px]  font-semibold">
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    <Link to="/aboutus">About</Link>
                  </li>
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    <a href="/pricing">Pricing</a>
                  </li>
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    <a href="/howItWorks">How it Works</a>
                  </li>
                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    <a href="/contactus">Contct</a>
                  </li>

                  <li className="hover:text-black transition  hover:underline  cursor-pointer">
                    <a href="/clicknow">Sign In</a>
                  </li>
                  <li className="hover:text-black transition  hover:underline  cursor-pointer text-[#000] bg-[#D4CEDB] px-4 py-2 rounded-md ">
                    <a href="/pricing">Make you Website</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>{click && content}</div>
            <button
              className="block md:hidden translate text-[#352B3D]"
              onClick={handleClick}
            >
              {click ? <FaTimes /> : <CiMenuBurger />}
            </button>
          </div>
        </nav>
      </AppLayout>
    </div>
  );
};

export default Navbar;
