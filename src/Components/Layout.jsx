import React from "react";
import Hero from "./Hero";
import Customberp from "./Customberp";
import Shopymart from "./Shopymart";
import Shoopmartgivyou from "./Shoopmartgivyou";
import Category from "./Category";
import HowItWorks from "./HowItWorks";
import Pricing from "./Pricing";
import Feedback from "./Feedback";
import GetTouch from "./GetTouch";
import Recentblg from "./Recentblg";
const Layout = () => {
  return (
    <div className="bg-[#FFF]">
      <Hero />
      <Customberp />
      <Shopymart />
      <Shoopmartgivyou />
      <Category />
      <HowItWorks />
      <Pricing />
      <Feedback />

      <Recentblg />
      <GetTouch />
    </div>
  );
};

export default Layout;
