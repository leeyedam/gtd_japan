import React, { lazy, Suspense } from "react";
import FirstSection from "./FirstSection";
const SecondSection = lazy(() => import("./SecondSection"));
const ThirdSection = lazy(() => import("./ThirdSection"));
const FourthSection = lazy(() => import("./FourthSection"));

function Home() {
  return (
    <Suspense fallback="..loading">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </Suspense>
  );
}

export default Home;
