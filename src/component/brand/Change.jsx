import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";

function Change() {
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
        <Grid item xs={12} sm={12} md={7}>
          <Card
            sx={{
              maxWidth: { xs: "320px", sm: "600px", md: "1400px" },
              height: { xs: "380px", sm: "400px", md: "800px" },
              marginTop: { xs: "5px", sm: "40px", md: "220px" },
            }}
            style={{
              boxShadow: "none",
              backgroundColor: "transparent",
            }}
          >
            <Box
              sx={{
                width: { xs: "320px", sm: "600px", md: "1400px" },
                height: { xs: "400px", sm: "400px", md: "800px" },
              }}
            />
            <Box
              position="absolute"
              backgroundColor="#00000052"
              zIndex={5}
              sx={{
                width: { xs: "320px", sm: "600px", md: "680px" },
                height: { xs: "213px", sm: "400px", md: "800px" },
                top: { xs: "2%", sm: "5%", md: "15%" },
                right: { xs: "0%", sm: "0%", md: "0%" },
                borderRadius: "20px",
              }}
            />
            <Box
              position="absolute"
              component="img"
              sx={{
                width: { xs: "320px", sm: "600px", md: "680px" },
                height: { xs: "213px", sm: "400px", md: "800px" },
                top: { xs: "2%", sm: "5%", md: "15%" },
                right: { xs: "0%", sm: "0%", md: "0%" },
                objectFit: "cover",
                borderRadius: "20px",
              }}
              src="images/brand/2.Webp"
              alt="gtd"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Typography
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            position="absolute"
            zIndex={7}
            sx={{
              fontSize: { xs: "28px", sm: "34px", md: "82px", lg: "82px" },
              lineHeight: { xs: "36px", sm: "46px", md: "95px" },
              marginTop: { xs: "60px", sm: "80px", md: "150px" },
              marginBottom: { xs: "250px", sm: "25px", md: "25px" },
              textAlign: { xs: "center", sm: "left", md: "left" },
              top: { xs: "5%", sm: "15%", md: "35%" },
              left: { xs: "27%", sm: "10%", md: "0%" },
            }}
            style={{
              fontFamily: "NanumSquareNeo-Variable",
              fontWeight: 900,
              color: "#fff",
            }}
          >
            Change
            <br /> The Game
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            position="absolute"
            zIndex={7}
            sx={{
              display: { xs: "none", sm: "flex", md: "flex" },
              maxWidth: { xs: "320px", sm: "480px", md: "660px" },
              fontSize: { xs: "14px", md: "18px" },
              lineHeight: { md: "35px" },
              marginBottom: { md: "20px" },
              fontWeight: { md: 500 },
              top: { sm: "65%", md: "85%" },
              left: { sm: "10%", md: "0%" },
            }}
            style={{
              fontFamily: "NanumSquareNeo-Variable",
              color: "#fff",
              textAlign: "left",
            }}
          >
            PGA, LPGA, KPGA, KLPGA, JPGA, JLPGA 등 주요 메인투어에서
            <br /> 총 72승을 기록한 선수들이 조지 다케이가 만든 제품으로 우승을
            하였고,
            <br /> 2018년 GT455 시리즈로 일본 내 공인 비거리 1등 드라이버가 되며
            1개 모델만
            <br /> 약 30,000개의 판매량을 기록하였다. 이후 GT455 Alpha가 출시,
            2018년부터 2020년까지 공인 드라이버 비거리 1위를 놓치지 않고 있다.
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
              top: { xs: "64%" },
              left: { sm: "10%", md: "9%" },
            }}
            style={{
              fontFamily: "NanumSquareNeo-Variable",
              color: "#fff",
              textAlign: "left",
            }}
          >
            PGA, LPGA, KPGA, KLPGA, JPGA, JLPGA 등 주요 메인투어에서 총 72승을
            기록한 선수들이 조지 다케이가 만든 제품으로 우승을 하였고, 2018년
            GT455 시리즈로 일본 내 공인 비거리 <br /> 1등 드라이버가 되며 1개
            모델만 약 30,000개의 판매량을 기록하였다. 이후 GT455 Alpha가 출시,
            2018년부터 2020년까지 공인 드라이버 비거리 1위를 놓치지 않고 있다.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Change;
