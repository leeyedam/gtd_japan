import React, { lazy, Suspense } from "react";
import FirstSection from "./FirstSection";
import SEOMetaTag from "../SEOMetaTag";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";

function Home() {
  return (
    <>
      <SEOMetaTag
        title="GTD golf"
        description="일본 천재 디자이너 조지 다케이가 만들어낸 클럽의 기능을 극대화한 풀티탄 소재의 폭발적 퍼포먼스"
        keywords="GTD, GTD GOLF"
        imgsrc="https://gtdgolfkorea.web.app/images/slide/1.Webp"
        url="https://gtdgolfkorea.web.app/"
      />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </>
  );
}

export default Home;
