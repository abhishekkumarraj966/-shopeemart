import "./App.css";
import Category from "./Components/Category";
import Customberp from "./Components/Customberp";
import Feedback from "./Components/Feedback";
import Footer from "./Components/Footer";
import GetTouch from "./Components/GetTouch";
import Hero from "./Components/Hero";
import HowItWorks from "./Components/HowItWorks";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import Recentblg from "./Components/Recentblg";
import Searchpag from "./Components/Searchpag";
import Shoopmartgivyou from "./Components/Shoopmartgivyou";
import Shopymart from "./Components/Shopymart";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Hero />
      <Customberp />
      <Shopymart />
      <Shoopmartgivyou />
      <Category />
      <HowItWorks/>      
      <Pricing />
      <Feedback />

      <Recentblg /> */}
      {/* <GetTouch /> */}
      <Searchpag/>
      <Footer />
    </div>
  );
}

export default App;
