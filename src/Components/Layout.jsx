import React, { useEffect } from "react";
import Hero from "./Hero";
import Customberp from "./Customberp";
import Shopymart from "./Shopymart";
import Shoopmartgivyou from "./Shoopmartgivyou";
import HowItWorks from "./HowItWorks";
import Pricing from "./Pricing";
import Feedback from "./Feedback";
import GetTouch from "./GetTouch";
import Recentblg from "./Recentblg";
import { useLocation } from "react-router-dom";
import HomCategory from "./HomCategory";
const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className="bg-[#FFF]">
      <Hero />
      <Customberp />
      <Shopymart />
      <Shoopmartgivyou />
      <HomCategory />
      <HowItWorks id="howItWorks" />
      <Pricing id="pricing" />
      <Feedback />

      <Recentblg />
      <GetTouch />
    </div>
  );
};

export default Layout;
