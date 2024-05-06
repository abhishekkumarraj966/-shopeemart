import "./App.css";
import Footer from "./Components/Footer";

import Layout from "./Components/Layout";
import Navbar from "./Components/Navbar";

import Searchpag from "./Components/Searchpag";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Layout />} />

          <Route path="/searchpg" element={<Searchpag />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
