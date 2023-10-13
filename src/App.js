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
      <SEOMetaTag
        title="GTD golf"
        description="일본 천재 디자이너 조지 다케이가 만들어낸 클럽의 기능을 극대화한 풀티탄 소재의 폭발적 퍼포먼스"
        keywords="GTD, GTD GOLF"
        imgsrc="https://gtdgolfkorea.web.app/images/slide/1.Webp"
        url="https://gtdgolfkorea.web.app/"
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
        <Route path="/fitting/:id" element={<FittingProductPageLayout />} />
        <Route
          path="/accessories/:id"
          element={<AccessoriesProductPageLayout />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
