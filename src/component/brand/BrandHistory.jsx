import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";

function BrandHistory() {
  const titleTextStyle = {
    display: { xs: "flex", sm: "flex", md: "flex" },
    position: "absolute",

    fontSize: { xs: "26px", sm: "38px", md: "76px" },
    lineHeight: { xs: "40px", sm: "55px", md: "95px" },
    marginTop: { xs: "30px" },
    marginBottom: { xs: "10px", sm: "25px", md: "25px" },
  };
  const titleFontStyle = {
    fontFamily: "Giants-Inline",
    fontWeight: 900,
    textAlign: "left",
  };
  return (
    <div>
      <Grid item xs={12} sm={12} md={12} position="relative">
        <Card
          sx={{
            maxWidth: { xs: "320px", sm: "600px", md: "1400px" },
            height: { xs: "450px", sm: "400px", md: "800px" },
            marginTop: { md: "30px" },
          }}
          style={{
            boxShadow: "none",
            backgroundColor: "transparent",
          }}
        >
          <Box
            position="absolute"
            backgroundColor="#00000096"
            borderRadius="20px"
            sx={{
              width: { xs: "320px", sm: "600px", md: "1400px" },
              height: { xs: "213px", sm: "400px", md: "800px" },
            }}
          />
          <Box
            component="img"
            sx={{
              width: { xs: "320px", sm: "600px", md: "1400px" },
              height: { xs: "213px", sm: "400px", md: "800px" },
              borderRadius: "20px",
            }}
            src="images/brand/1.Webp"
            alt="gtd"
          />
          <Typography
            data-aos="fade-up"
            data-aos-delay="200"
            position="absolute"
            sx={{
              fontSize: { xs: "28px", sm: "34px", md: "82px", lg: "82px" },
              lineHeight: { xs: "36px", sm: "46px", md: "95px" },
              marginTop: { xs: "60px", sm: "80px", md: "150px" },
              marginBottom: { xs: "250px", sm: "25px", md: "25px" },
              textAlign: { xs: "center", sm: "left", md: "left" },
              top: { xs: "3%", sm: "5%", md: "15%" },
              left: { xs: "13%", sm: "10%", md: "9%" },
            }}
            style={{
              fontFamily: "NanumSquareNeo-Variable",
              fontWeight: 900,
              color: "#fff",
            }}
          >
            Brand History Of
            <br />
            The GTD Golf
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-delay="200"
            position="absolute"
            sx={{
              display: { xs: "none", sm: "flex", md: "flex" },
              maxWidth: { xs: "320px", sm: "500px", md: "710px" },
              fontSize: { xs: "14px", md: "18px" },
              lineHeight: { md: "35px" },
              marginBottom: { md: "20px" },
              fontWeight: { md: 500 },
              top: { sm: "56%", md: "65%" },
              left: { sm: "10%", md: "9%" },
            }}
            style={{
              fontFamily: "NanumSquareNeo-Variable",
              color: "#fff",
              textAlign: "left",
            }}
          >
            GTD 창립자 클럽 디자이너 일본 골프 3대장인 '조지 다케이'는
            <br /> 1990년 캘리포니아에서 Golf Club 개발 및 디자인을 공부하였고,
            1997년 일본 내 첫 런칭한 브랜드 "게이지 디자인"의 창립자이며, 2007년
            조지 스피릿이라는 브랜드를 만들어 한국 내에서 센세이션을 일으킨
            사쿠라 에디션을 성공시켰다. 프로들에겐 투어에서의 최고의 무기가
            되고, 아마추어들에게는 꿈의 지팡이가 되는 'Dream Stick'을 만드는
            것이 그가 GTD를 개발하는 목표이다.
          </Typography>
          <Typography
            position="absolute"
            sx={{
              display: { xs: "flex", sm: "none", md: "none" },
              maxWidth: { xs: "320px", sm: "500px", md: "710px" },
              fontSize: { xs: "13px" },
              lineHeight: { xs: "20px" },
              marginBottom: { md: "20px" },
              fontWeight: { md: 500 },
              top: { xs: "52%" },
              left: { sm: "10%", md: "9%" },
            }}
            style={{
              fontFamily: "NanumSquareNeo-Variable",
              color: "#fff",
              textAlign: "left",
            }}
          >
            GTD 창립자 클럽 디자이너 일본 골프 3대장인 '조지 다케이'는 1990년
            캘리포니아에서 Golf Club 개발 및 디자인을 공부하였고, 1997년 일본 내
            첫 런칭한 브랜드 "게이지 디자인"의 창립자이며, 2007년 조지
            스피릿이라는 브랜드를 만들어 한국 내에서 센세이션을 일으킨 사쿠라
            에디션을 성공시켰다.
            <br />
            프로들에겐 투어에서의 최고의 무기가 되고, 아마추어들에게는 꿈의
            지팡이가 되는 'Dream Stick'을 만드는 것이 그가 GTD를 개발하는
            목표이다.
          </Typography>
        </Card>
      </Grid>
    </div>
  );
}

export default BrandHistory;
