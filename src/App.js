import { useEffect, lazy } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./component/Header";
import FirstSection from "./component/FirstSection";
import Footer from "./component/Footer";
const SecondSection = lazy(() => import("./component/SecondSection"));
const ThirdSection = lazy(() => import("./component/ThirdSection"));
const FourthSection = lazy(() => import("./component/FourthSection"));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <div className="App">
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
    </div>
  );
}

export default App;
