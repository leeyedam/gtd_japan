import React from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function BrandHistory() {
  const imgStyle = {
    width: {
      xs: "320px",
      sm: "600px",
      md: "750px",
      lg: "1400px",
      xl: "1400px",
    },
    height: { xs: "213px", sm: "400px", md: "500px", lg: "800px" },
  };
  const subTitleFontStyle = {
    fontFamily: "NanumSquareNeo-Variable",
    color: "#fff",
    textAlign: "left",
  };

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1800,
        xxl: 2300,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Grid item xs={12} sm={12} md={12} position="relative">
        <Card
          sx={{
            maxWidth: {
              xs: "320px",
              sm: "600px",
              md: "750px",
              lg: "1400px",
              xl: "1400px",
              xxl: "1400px",
            },
            height: { xs: "530px", sm: "400px", md: "500px", lg: "800px" },
            marginTop: { lg: "30px" },
          }}
          style={{
            boxShadow: "none",
            backgroundColor: "transparent",
          }}
        >
          <Box
            position="absolute"
            backgroundColor="#0000002b"
            borderRadius="20px"
            sx={imgStyle}
          />
          <Box
            component="img"
            sx={{
              ...imgStyle,
              borderRadius: "20px",
              objectFit: "cover",
            }}
            src="https://gtdgolf.co.kr/images/brand/1.Webp"
            alt="BRAND HISTORY OF THE GTD GOLF"
          />
          <Typography
            data-aos="fade-up"
            data-aos-delay="200"
            position="absolute"
            sx={{
              fontSize: {
                xs: "28px",
                sm: "34px",
                md: "40px",
                lg: "82px",
                xl: "82px",
              },
              lineHeight: { xs: "36px", sm: "46px", md: "54px", lg: "95px" },
              marginTop: { xs: "60px", sm: "36px", lg: "150px" },
              marginBottom: { xs: "250px", sm: "25px", md: "25px" },
              textAlign: { xs: "center", sm: "left", md: "left" },
              top: { xs: "3%", sm: "5%", md: "10%", lg: "15%" },
              left: { xs: "19%", sm: "20%", lg: "20%", xl: "22%", xxl: "27%" },
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
              maxWidth: { xs: "320px", sm: "484px", md: "600px", lg: "800px" },
              fontSize: { xs: "14px", md: "16px", lg: "18px" },
              lineHeight: { lg: "34px" },
              marginBottom: { md: "20px" },
              fontWeight: { md: 500 },
              top: { sm: "44%", lg: "64%" },
              left: { sm: "20%", lg: "20%", xl: "22%", xxl: "27%" },
            }}
            style={subTitleFontStyle}
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
            position="absolute"
            sx={{
              display: { xs: "flex", sm: "none", md: "none" },
              maxWidth: { xs: "320px", sm: "500px", md: "710px" },
              fontSize: { xs: "13px" },
              lineHeight: { xs: "20px" },
              marginBottom: { md: "20px" },
              fontWeight: { md: 500 },
              top: { xs: "45%" },
              left: { sm: "10%", md: "9%" },
            }}
            style={subTitleFontStyle}
          >
            GTD創立者でありクラブデザイナー、日本ゴルフ界の“三大匠”の一人である
            ジョージ・タケイは、
            <br />
            1990年にカリフォルニアでゴルフクラブの開発とデザインを学び、
            1997年には日本で初めて「ゲージデザイン（GaugeDesign）」というブランドを立ち上げ
            た創業者です。
            2007年には「ジョージスピリット（GeorgeSpirit）」というブランドを設立し、
            <br />
            韓国国内でセンセーションを巻き起こした サクラエディション
            を成功させました。
            <br />
            プロにとってはツアーでの“最強の武器”、
            <br />
            アマチュアにとっては“夢の杖（Dream
            Stick）”となるクラブを作ることこそが、
            <br />
            彼がGTDを開発する目的なのです。
          </Typography>
        </Card>
      </Grid>
    </ThemeProvider>
  );
}

export default BrandHistory;
