import React from "react";

function MainPopup({ setShowMainPop }) {
  const closePop = () => {
    setShowMainPop(false);
  };

  const closeTodayPop = () => {
    let expires = new Date();
    expires = expires.setHours(expires.getHours() + 24);
    localStorage.setItem("homeVisited", expires);
    // 현재 시간의 24시간 뒤의 시간을 homeVisited에 저장
    setShowMainPop(false);
  };
  return (
    <div className="popup-wrapper">
      <div className="main-popup">
        <h1>팝업입니다.</h1>
        <button onClick={closeTodayPop}>오늘 하루 열지 않기</button>
        <button onClick={closePop}>닫기</button>
      </div>
    </div>
  );
}

export default MainPopup;
