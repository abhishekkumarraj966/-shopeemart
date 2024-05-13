import "./App.css";
import Footer from "./Components/Footer";

import Layout from "./Components/Layout";
import Navbar from "./Components/Navbar";
import Aboutus from "./Components/Pages/Aboutus";
import Contactus from "./Components/Pages/Contactus";
import Affilatepg from "./Components/Pages/Affilatepg";
import Careers from "./Components/Pages/Careers";
import Searchpag from "./Components/Searchpag";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Testimonials from "./Components/Pages/Testimonials";
import Faq from "./Components/Pages/Faq";
import Privacypolicy from "./Components/Pages/Privacypolicy";
import Returnsrefunds from "./Components/Pages/Returnsrefunds";
import Cookieguidelines from "./Components/Pages/Cookieguidelines";
import Termsconditions from "./Components/Pages/Termsconditions";
import Blogspg from "./Components/Pages/Blogspg";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Layout />} />

          <Route path="/contactus" exact element={<Contactus />} />
          <Route path="/aboutus" exact element={<Aboutus/>} />
          <Route path="/affilatepg" exact element={<Affilatepg/>} />
          <Route path="/careers" exact element={<Careers/>} />
          <Route path="/testimonials" exact element={<Testimonials/>} />

          <Route path="/faq" exact element={<Faq/>} />
          <Route path="/privacypolicy" exact element={<Privacypolicy/>} />
          <Route path="/returnsrefunds" exact element={<Returnsrefunds/>} />
          <Route path="/cookieguidelines" exact element={<Cookieguidelines/>} />
          <Route path="/termsconditions" exact element={<Termsconditions/>} />
          <Route path="/blogpg" exact element={<Blogspg/>} />

          <Route path="/searchpg" element={<Searchpag />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
