import React from "react";
import {
  Box,
  Card,
  Divider,
  Grid,
  Typography,
  createTheme,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

function ThirdSection() {
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
    <div className="third-section">
      <ThemeProvider theme={theme}>
        <Box
          align="center"
          width="100vw"
          sx={{
            position: "relative",
            height: { xs: "550px", sm: "420px", lg: "650px" },
            maxWidth: { xs: "100vw", sm: "100vw", lg: "100vw" },
            overflow: { sm: "hidden", md: "visible" },
            backgroundColor: { xs: "#111", sm: "#2f2f2f", md: "#2f2f2f" },
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: {
                xs: "center",
                sm: "center",
                lg: "space-between",
                xl: "center",
              },
              alignItems: "center",
              marginTop: { xs: "30px", sm: "30px", lg: "130px" },
            }}
          >
            <Grid
              item
              xs={10}
              sm={12}
              lg={7}
              xl={8}
              data-aos="fade-up"
              data-aos-delay="300"
              sx={{
                paddingLeft: {
                  sm: "60px",
                  // md: "360px",
                  lg: "400px",
                  xl: "150px",
                },
                textAlign: "left",
              }}
            >
              <Divider
                sx={{
                  display: { xs: "flex", sm: "none", md: "none" },
                  width: "100%",
                  border: ".2px solid #2e2e2e",
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: "36px", sm: "44px", lg: "84px", xl: "86px" },
                  lineHeight: { xs: "42px", sm: "52px", lg: "95px" },
                  marginTop: {
                    xs: "60px",
                    sm: "80px",
                    md: "100px",
                    lg: "150px",
                  },
                  marginBottom: { xs: "250px", sm: "25px", lg: "25px" },
                  textAlign: { xs: "center", sm: "left", lg: "left" },
                  fontFamily: {
                    xs: "NanumBarunGothic",
                    sm: "NanumBarunGothic",
                    md: "NanumSquareNeo-Variable",
                  },
                }}
                style={{
                  fontWeight: 900,
                  color: "#8f8f8f",
                }}
              >
                Beginning Of
                <br /> Triple Titan
              </Typography>
              <Typography
                sx={{
                  display: { xs: "none", sm: "flex", md: "flex" },
                  fontSize: { sm: "16px", md: "18px" },
                  fontFamily: {
                    sm: "NanumBarunGothic",
                    md: "NanumSquareNeo-Variable",
                  },
                }}
                style={{
                  textAlign: "left",
                  fontWeight: 700,
                  color: "#626262",
                }}
              >
                BLACK ICEそこに潜む“潜在的な恐れ”
                <br /> その恐れを克服する、完璧なショットの始まり。
                <br />
                日本の天才デザイナーが生み出したクラブ性能を最大限に引き出す
                <br /> フルチタン素材の爆発的パフォーマンス・GTD BLACK ICE
                SERIES を、
                <br /> フィールドでぜひ直接体感してください。
              </Typography>
              <Typography
                sx={{
                  display: { xs: "flex", sm: "none", md: "none" },
                  fontSize: { xs: "16px", sm: "16px", md: "18px" },
                  fontFamily: {
                    xs: "NanumBarunGothic",
                  },
                }}
                style={{
                  textAlign: "center",
                  fontWeight: 700,
                  color: "#626262",
                  justifyContent: "center",
                }}
              >
                BLACK ICEそこに潜む“潜在的な恐れ”
                <br /> その恐れを克服する、完璧なショットの始まり。
                <br />
                日本の天才デザイナーが生み出したクラブ性能を最大限に引き出す
                <br /> フルチタン素材の爆発的パフォーマンス・GTD BLACK ICE
                SERIES を、
                <br /> フィールドでぜひ直接体感してください。
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <Card
                sx={{
                  position: "absolute",
                  top: { xs: "37%", sm: "5%", md: "-5%", lg: "-20%" },
                  right: {
                    xs: "20%",
                    sm: "-10%",
                    md: "1%",
                    lg: "8%",
                    xl: "15%",
                  },
                  maxHeight: { xs: "220px", sm: "480px", lg: "1000px" },
                  maxWidth: { xs: "220px", sm: "480px", lg: "100%" },
                  marginTop: { lg: "30px" },
                }}
                style={{ boxShadow: "none", backgroundColor: "transparent" }}
              >
                <Box
                  component="img"
                  sx={{
                    maxHeight: {
                      xs: "100%",
                      sm: "100%",
                      // md: "750px",
                      lg: "800px",
                    },
                    maxWidth: {
                      xs: "100%",
                      sm: "100%",
                      // md: "750px",
                      lg: "800px",
                    },
                    objectFit: "cover",
                  }}
                  src="images/slide/16.png"
                  alt="BEGINNING OF TRIPLE TITAN"
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default ThirdSection;
