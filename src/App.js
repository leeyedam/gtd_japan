import { useEffect, lazy, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Brand from "./component/Brand";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Guarantee from "./component/Guarantee";
import Fitting from "./component/Fitting";
import Accessories from "./component/Accessories";
import SEOMetaTag from "./SEOMetaTag";
import TermsOfUse from "./TermsOfUse";
import PrivacyPolicy from "./PrivacyPolicy";
import FittingProductPageLayout from "./component/FittingProductPageLayout";
import AccessoriesProductPageLayout from "./component/AccessoriesProductPageLayout";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  useEffect(() => {
    const time = localStorage.getItem("expirationTime");
    if (Date.now() > time && !!time) {
      localStorage.clear();
      window.location.reload();
    }
  }, []);

  return (
    <div className="App">
      <div className="App">
        <SEOMetaTag
          title="GTD golf"
          description="Beginning of Triple Titan 트리플 티탄 드라이버의 시작"
          keyword="GOLF, GOLF BAG, GEAR, Driver, Wood, Utility, Iron, Wedge, Putter, CLUB, FITTING, Premium"
        />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/guarantee" element={<Guarantee />} />
          <Route path="/fitting" element={<Fitting />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/policy" element={<PrivacyPolicy />} />
          <Route path="/product/:id" element={<FittingProductPageLayout />} />
          <Route
            path="/accessories/:id"
            element={<AccessoriesProductPageLayout />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
