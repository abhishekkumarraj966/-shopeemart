import "./App.css";
import Category from "./Components/Category";
import Customberp from "./Components/Customberp";
import Feedback from "./Components/Feedback";
import GetTouch from "./Components/GetTouch";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Recentblg from "./Components/Recentblg";
import Shoopmartgivyou from "./Components/Shoopmartgivyou";
import Shopymart from "./Components/Shopymart";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Customberp />
      <Shopymart />
      <Category />
      <Recentblg />
      <Feedback />
      <Shoopmartgivyou />
      <GetTouch />
    </div>
  );
}

export default App;
