import React, { useEffect, useState } from "react";
import FirstSection from "./FirstSection";
import SEOMetaTag from "../SEOMetaTag";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import MainPopup from "./MainPopup";

function Home() {
  const [showMainPop, setShowMainPop] = useState(false);
  // 기본 세팅 값은 false
  const HOME_VISITED = localStorage.getItem("homeVisited");
  // localStorage에 homeVisited 조회

  useEffect(() => {
    const today = new Date();
    const handleMainPop = () => {
      if (HOME_VISITED && HOME_VISITED > today) {
        // 현재 date가 localStorage의 시간보다 크면 return
        return;
      }
      if (!HOME_VISITED || HOME_VISITED < today) {
        // 저장된 date가 없거나 today보다 작다면 popup 노출
        setShowMainPop(true);
      }
    };
    window.setTimeout(handleMainPop, 1000); // 1초 뒤 실행
  }, [HOME_VISITED]);
  return (
    <>
      <SEOMetaTag
        title="GTD golf"
        description="일본 천재 디자이너 조지 다케이가 만들어낸 클럽의 기능을 극대화한 풀티탄 소재의 폭발적 퍼포먼스"
        keywords="GTD, GTD GOLF, GTD KOREA, GTD 드라이버, gtd 골프, 지티디, 지티디 골프, 지티디 드라이버, 지티디 코리아"
        imgsrc="https://gtdgolf.co.kr/images/slide/1.Webp"
        url="https://gtdgolf.co.kr/"
      />
      {showMainPop && <MainPopup setShowMainPop={setShowMainPop}></MainPopup>}
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </>
  );
}

export default Home;
