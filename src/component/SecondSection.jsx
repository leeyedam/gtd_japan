import React from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function SecondSection() {
  const titleTextStyle = {
    display: { xs: "none", sm: "flex", lg: "flex" },
    position: "absolute",
    fontSize: { xs: "26px", sm: "38px", md: "48px", lg: "76px" },
    lineHeight: { xs: "40px", sm: "55px", lg: "95px" },
    marginTop: { xs: "30px", md: "80px" },
    marginBottom: { xs: "10px", sm: "25px", md: "35px", lg: "25px" },
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
          maxHeight: { xs: "100%", sm: "100%", lg: "100%" },
          maxWidth: { xs: "100vw", sm: "720px", md: "820px", lg: "1600px" },
          backgroundColor: { xs: "#111" },
        }}
      >
        <Grid
          container
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: { xs: "center", sm: "center", lg: "space-between" },
            alignItems: "center",
            marginTop: { xs: "100px", sm: "130px", md: "160px", lg: "130px" },
            marginBottom: { xs: "10px", sm: "80px", md: "100px", lg: "140px" },
          }}
        >
          <Grid item xs={12} sm={12} lg={5}>
            <Typography
              data-aos="fade-right"
              data-aos-delay="200"
              sx={{
                ...titleTextStyle,
                top: { lg: "15%" },
                left: { lg: "28%" },
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
                top: { sm: "6%", lg: "27%" },
                left: { lg: "28%" },
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
                top: { sm: "6%", lg: "27%" },
                left: { sm: "12%", lg: "39%" },
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
              alt="BRAND HISTORY OF THE GTD GOLF"
            />
            <Card
              sx={{
                maxHeight: {
                  xs: "400px",
                  sm: "700px",
                  md: "800px",
                  lg: "1000px",
                },
                maxWidth: { xs: "320px", sm: "600px", md: "700px", lg: "100%" },
                marginTop: { md: "30px" },
              }}
              style={{ boxShadow: "none", backgroundColor: "transparent" }}
            >
              <Box
                component="img"
                sx={{
                  maxHeight: { xs: "100%", sm: "100%", lg: "800px" },
                  maxWidth: { xs: "100%", sm: "100%", lg: "100%" },
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
            sx={{
              marginTop: { xs: "40px", sm: "80px", lg: "400px" },
              paddingLeft: { lg: "10px" },
              textAlign: "left",
            }}
          >
            <Typography
              sx={{
                display: { xs: "none", sm: "none", lg: "flex" },
                maxWidth: { lg: "720px" },
                fontSize: { lg: "18px" },
                lineHeight: { lg: "35px" },
                marginBottom: { lg: "20px" },
                fontWeight: { lg: 500 },
              }}
              style={{
                fontFamily: "NanumSquareNeo-Variable",
                color: "#626262",
                textAlign: "left",
              }}
            >
              GTD創立者でありクラブデザイナー、日本ゴルフ界の“三大匠”の一人である
              ジョージ・タケイは、
              <br />
              1990年にカリフォルニアでゴルフクラブの開発とデザインを学び、
              <br />
              1997年には日本で初めて「ゲージデザイン（Gauge
              Design）」というブランドを立ち上げ た創業者です。
              2007年には「ジョージスピリット（George
              Spirit）」というブランドを設立し、
              韓国国内でセンセーションを巻き起こした サクラエディション
              を成功させました。 プロにとってはツアーでの“最強の武器”、
              アマチュアにとっては“夢の杖（Dream
              Stick）”となるクラブを作ることこそが、
              彼がGTDを開発する目的なのです。
            </Typography>
            <Typography
              sx={{
                display: { xs: "flex", sm: "flex", lg: "none" },
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
                display: { xs: "flex", sm: "flex", lg: "none" },
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
              sx={{
                display: { xs: "flex", sm: "flex", lg: "none" },
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
                display: { xs: "none", lg: "flex" },
                fontSize: { xs: "12px", sm: "16px", lg: "18px" },
                fontWeight: { sm: 700, lg: 500 },
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
