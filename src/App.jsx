import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Homecrousel";
import AboutHero from "./Components/Aboutus/AboutHero";
import Footer from "./Components/Footer";
import JuteBag from "./Components/Bags/JuteBag";
import NonWovenBag from "./Components/Bags/NonWovenBag";
import Canvas from "./Components/Bags/Canvas";
import BoppBag from "./Components/Bags/BoppBag";
import PrivacyPolicy from "./Components/Privacypolicy";
import TermsCondition from "./Components/Termscondition";
import WhatsappFloat from "./Components/WhatsappFloat";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutHero />} />
        <Route path="/bopp-bags" element={<BoppBag />} />
        <Route path="/jute-bags" element={<JuteBag />} />
        <Route path="/canvas-bags" element={<Canvas />} />
        <Route path="/non-woven-bags" element={<NonWovenBag />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/termsCondition" element={<TermsCondition />} />
      </Routes>
      <Footer />
      <WhatsappFloat />
    </Router>
  );
}

export default App;
