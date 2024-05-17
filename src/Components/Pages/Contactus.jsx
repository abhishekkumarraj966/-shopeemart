import React, { useState } from "react";
import contactimg from "../assites/contact.jpg";
import AppLayout from "../AppLayout";
const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    businessType: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server
    console.log(formData);
  };

  return (
    <div>
      <div className="">
        <img
          src={contactimg}
          alt="Lodinge..."
          className="w-full h-[150px] sm:h-[300px] shadow-purple-300 mb-5 sm:mb-8"
        />
        <div class="absolute top-[18%] sm:top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-[#FFF] font-bold text-[25px] sm:text-[38px]">
            Contact Us
          </h2>
        </div>
      </div>

      <div className="">
        <h2 className=" text-center text-[28px] font-bold mb-[30px] px-1">
          Let's Start a Conversation
        </h2>
        <AppLayout>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="mx-4">
            <h2 className="text-[20px] font-bold mb-[20px]">
              Ask how we can help You:
            </h2>
            <h2 className="font-bold text-start text-[16px] mb-2">
              See our platform in action
            </h2>
            <p className=" font-normal text-[16px]">
              Request a personalize demo of Bizzata partner marketing platform
            </p>
            <h1 className="font-bold text-start text-[16px] mb-2">
              Points of Contact
            </h1>
            <p className=" font-normal text-[16px]">U.s | TUNE </p>
            <p className="font-bold text-start text-[16px] mb-2"> Address</p>
            <h2 className="font-bold text-start text-[16px] mb-2">
              Billing Inquires
            </h2>
            <p className=" font-normal text-[16px]">Call. </p>
            <h2 className="font-bold text-start text-[16px] mb-2">
              Information and Sales
            </h2>
            <p className=" font-normal text-[16px]">Email.</p>
            <h2 className="font-bold text-start text-[16px] mb-2">Support</h2>
            <p className=" font-normal text-[16px]">Email..</p>
            <h2 className="font-bold text-start text-[16px] mb-2">
              Addditinal office Locations
            </h2>
            <p className=" font-normal text-[16px]  sm:mb-4 ">Location....</p>
          </div>
          
          <div className="max-w-md mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="businessType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Business Type
                </label>
                <input
                  type="text"
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium text-gray-700"
                >
                  Comment
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        </AppLayout>
      </div>
    </div>
  );
};

export default Contactus;
