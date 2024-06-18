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
import Login from "./Components/Pages/Login";
import Signeup from "./Components/Pages/Signeup";
import HowItWorks from "./Components/HowItWorks";
// import Pricing from "./Components/Pricing";
import Nextsigneup from "./Components/Pages/Nextsigneup";
import Gobutton from "./Components/Pages/Gobutton";
import Category from "./Components/Category";
import DocumentTitleHandler from "./Components/DocumentTitleHandler";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <div>
      <HelmetProvider>
        <BrowserRouter>
          <Navbar />
          <DocumentTitleHandler />
          <Routes>
            <Route path="/" exact element={<Layout />} />

            <Route path="/contactus" exact element={<Contactus />} />
            <Route path="/aboutus" exact element={<Aboutus />} />

            <Route path="/affilatepg" exact element={<Affilatepg />} />
            <Route path="/careers" exact element={<Careers />} />
            <Route path="/testimonials" exact element={<Testimonials />} />

            <Route path="/faq" exact element={<Faq />} />
            <Route path="/privacypolicy" exact element={<Privacypolicy />} />
            <Route path="/returnsrefunds" exact element={<Returnsrefunds />} />
            <Route
              path="/cookieguidelines"
              exact
              element={<Cookieguidelines />}
            />
            <Route
              path="/termsconditions"
              exact
              element={<Termsconditions />}
            />
            <Route path="/blogpg" exact element={<Blogspg />} />

            <Route path="/login" exact element={<Login />} />
            <Route path="/signeup" exact element={<Signeup />} />

            {/* <Route path="/pricing" exact element={<Pricing/>} /> */}
            <Route path="/howItWorks" exact element={<HowItWorks />} />
            <Route path="/nextsigneup" exact element={<Nextsigneup />} />
            <Route path="/searchpg" element={<Searchpag />} />
            <Route path="/category" element={<Category />} />
          </Routes>
          <Gobutton />
          <Footer />
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}

export default App;
