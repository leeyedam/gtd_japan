import React, { lazy, Suspense } from "react";
import FirstSection from "./FirstSection";
import SEOMetaTag from "../SEOMetaTag";
const SecondSection = lazy(() => import("./SecondSection"));
const ThirdSection = lazy(() => import("./ThirdSection"));
const FourthSection = lazy(() => import("./FourthSection"));

function Home() {
  return (
    <Suspense fallback="..loading">
      <SEOMetaTag
        title="GTD golf"
        description="GTD golf"
        keywords="GOLF, GOLF BAG, GEAR, Driver, Wood, Utility, Iron, Wedge, Putter, CLUB, FITTING, Premium"
        imgsrc="https://gtdgolfkorea.web.app/images/slide/1.Webp"
        url="https://gtdgolfkorea.web.app/"
      />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </Suspense>
  );
}

export default Home;
