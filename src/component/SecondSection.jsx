import React from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function SecondSection() {
  const titleTextStyle = {
    display: { xs: "none", sm: "flex", md: "flex" },
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
    <div className="second-section">
      <Box
        align="center"
        width="100vw"
        sx={{
          maxHeight: { xs: "100%", sm: "100%", md: "100%" },
          maxWidth: { xs: "100vw", sm: "720px", md: "1600px" },
          backgroundColor: { xs: "#111" },
        }}
      >
        <Grid
          container
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: { xs: "center", sm: "center", md: "space-between" },
            alignItems: "center",
            marginTop: { xs: "100px", sm: "130px", md: "130px" },
            marginBottom: { xs: "10px", sm: "80px", md: "140px" },
          }}
        >
          <Grid item xs={12} sm={12} md={5}>
            <Typography
              data-aos="fade-right"
              data-aos-delay="200"
              sx={{
                ...titleTextStyle,
                top: { md: "15%" },
                left: { md: "28%" },
              }}
              style={{
                ...titleFontStyle,
                color: "#cacaca",
              }}
            >
              Brand History Of
            </Typography>
            <Typography
              data-aos="fade-right"
              data-aos-delay="200"
              sx={{
                ...titleTextStyle,
                top: { sm: "6%", md: "27%" },
                left: { md: "28%" },
              }}
              style={{
                ...titleFontStyle,
                color: "#cacaca",
              }}
            >
              The
            </Typography>
            <Typography
              data-aos="fade-right"
              data-aos-delay="200"
              sx={{
                ...titleTextStyle,
                top: { sm: "6%", md: "27%" },
                left: { sm: "12%", md: "38%" },
              }}
              style={{
                ...titleFontStyle,
                color: "#aa2727",
              }}
            >
              GTD Golf
            </Typography>
            <Box
              className="img"
              component="img"
              sx={{
                display: { xs: "flex", sm: "none", md: "none" },
                position: "absolute",
                top: { xs: "-3%", sm: "-8%" },
                left: { xs: "3%", sm: "8%" },
                maxHeight: { xs: "80px", sm: "150px" },
                maxWidth: { sm: "150px" },
              }}
              src="images/title2.png"
              alt="gtd"
            />
            <Card
              sx={{
                maxHeight: { xs: "400px", sm: "700px", md: "1000px" },
                maxWidth: { xs: "320px", sm: "600px", md: "100%" },
                marginTop: { md: "30px" },
              }}
              style={{ boxShadow: "none", backgroundColor: "transparent" }}
            >
              <Box
                component="img"
                sx={{
                  maxHeight: { xs: "100%", sm: "100%", md: "800px" },
                  maxWidth: { xs: "100%", sm: "100%", md: "100%" },
                }}
                src="images/slide/12.Webp"
                alt="gtd"
              />
            </Card>
          </Grid>
          <Grid
            item
            xs={10}
            sm={12}
            md={7}
            // data-aos="fade"
            // data-aos-delay="200"
            sx={{
              marginTop: { xs: "40px", sm: "80px", md: "400px" },
              paddingLeft: { md: "10px" },
              textAlign: "left",
            }}
          >
            <Typography
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
                maxWidth: { md: "720px" },
                fontSize: { md: "18px" },
                lineHeight: { md: "35px" },
                marginBottom: { md: "20px" },
                fontWeight: { md: 500 },
              }}
              style={{
                fontFamily: "NanumSquareNeo-Variable",
                color: "#626262",
                textAlign: "left",
              }}
            >
              GTD 창립자 클럽 디자이너 일본 골프 3대장인 '조지 다케이'는
              <br /> 1990년 캘리포니아에서 Golf Club 개발 및 디자인을
              공부하였고, 1997년 일본 내 <br />첫 런칭한 브랜드 "게이지
              디자인"의 창립자이며, 2007년 조지 스피릿이라는 브랜드를 만들어
              한국 내에서 센세이션을 일으킨 사쿠라 에디션을 성공시켰다.
              프로들에겐 투어에서의 최고의 무기가 되고, 아마추어들에게는 꿈의
              지팡이가 되는 'Dream Stick'을 만드는 것이 <br /> 그가 GTD를
              개발하는 목표이다.
            </Typography>
            <Typography
              // data-aos="fade-left"
              // data-aos-delay="300"
              sx={{
                display: { xs: "flex", sm: "flex", md: "none" },
                maxWidth: { xs: "320px", sm: "100vw" },
                fontSize: { xs: "18px", sm: "25px" },
                lineHeight: { xs: "40px", sm: "45px" },
                fontWeight: { xs: "900", sm: "900" },
              }}
              style={{
                fontFamily: "Giants-Inline",
                color: "#808080",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              프로들에겐 투어에서의
              <br /> 최고의 무기가 되고, 아마추어들에게는
              <br /> 꿈의 지팡이가 되는
            </Typography>
            <Typography
              data-aos="fade-left"
              data-aos-delay="300"
              sx={{
                display: { xs: "flex", sm: "flex", md: "none" },
                maxWidth: { xs: "320px", sm: "100vw" },
                fontSize: { xs: "18px", sm: "32px" },
                lineHeight: { xs: "40px", sm: "55px" },
                fontWeight: { xs: "900", sm: "900" },
              }}
              style={{
                fontFamily: "Giants-Inline",
                color: "#aa2727",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              'Dream Stick'을
            </Typography>
            <Typography
              // data-aos="fade-left"
              // data-aos-delay="300"
              sx={{
                display: { xs: "flex", sm: "flex", md: "none" },
                maxWidth: { xs: "320px", sm: "100vw" },
                fontSize: { xs: "18px", sm: "25px" },
                lineHeight: { xs: "40px", sm: "45px" },
                marginBottom: { xs: "12px" },
                fontWeight: { xs: "900", sm: "900" },
              }}
              style={{
                fontFamily: "Giants-Inline",
                color: "#808080",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              만드는 것이 GTD의 개발 목표이다.
            </Typography>
            <Typography
              sx={{
                display: { xs: "none", md: "flex" },
                fontSize: { xs: "12px", sm: "16px", md: "18px" },
                fontWeight: { sm: 700, md: 500 },
              }}
              style={{
                fontFamily: "NanumSquareNeo-Variable",
                textAlign: "left",
                textUnderlinePosition: "under",
              }}
            >
              <Link to="/brand"> Detail View</Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default SecondSection;
