import { useEffect, lazy } from "react";
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

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <div className="App">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/guarantee" element={<Guarantee />} />
          <Route path="/fitting" element={<Fitting />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
