import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#ffffff] p-4">
      <div className="max-w-7xl mx-auto flex  lg:justify-between items-center">
        <div 
        className={`text-[#000000] ml-[21px] lg:ml-[64px] text-[15px] lg:text-[30px]   lg:hidden font-bold ${
            isOpen ? "hidden" : "block"
          }`}
        >
          <a href="https://adsp-temp1-pro.vercel.app/" className="">SHOP</a>
        </div>
        <div className=" lg:hidden">
          <button
            className="text-black focus:outline-none absolute right-2 top-2"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 5h16a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zm0 5h16a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
        <ul
          className={`lg:flex  space-x-[0px]  md:space-x-[50px] ${isOpen ? "block" : "hidden"} mt-4  md:ml-[30px]`}
        >
          <li className="flex gap-2 items-baseline   md:ml-12 lg:ml-0  lg:justify-center">
            <a
              href="#home"
              className="text-[#BF9BDF] lg:text-[30px] text-[20px] font-semibold hover:text-[#722174] hover:underline"
            >
              About Us
            </a>
          </li>
          <li className="flex gap-2 items-baseline">
            <a
              href="#shop"
              className="text-[#747474] lg:text-[30px] text-[20px] font-semibold hover:text-gray-300 hover:underline"
            >
              Pricing
            </a>
          </li>
          <li className="flex gap-2 items-baseline">
            <a
              href="#blogs"
              className="text-[#747474] lg:text-[30px] text-[20px] font-semibold hover:text-gray-300 hover:underline"
            >
              How it Works
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="text-[#747474] hover:text-gray-300 text-[20px] lg:text-[30px] font-semibold hover:underline"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-[#747474] hover:text-gray-300 text-[20px] lg:text-[30px] font-semibold hover:underline"
            >
              Sign In
            </a>
          </li>
          <li className=" md:py-2 pt-0.5 md:bg-[#D4CDDA] md:px-2 px-0.5 rounded-full ">
            <a
              href="#about"
              className="text-[#747474]  lg:text-[20px] text-[16px] font-normal "
            >
              Make Your Website with one{" "}
              <span className="text-[#f4f767d4]"> click</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
