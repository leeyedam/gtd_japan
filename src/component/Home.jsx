import React, { lazy } from "react";
import FirstSection from "./FirstSection";
const SecondSection = lazy(() => import("./SecondSection"));
const ThirdSection = lazy(() => import("./ThirdSection"));
const FourthSection = lazy(() => import("./FourthSection"));

function Home() {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </div>
  );
}

export default Home;
