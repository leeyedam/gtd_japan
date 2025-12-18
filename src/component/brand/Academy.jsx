import React from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function Academy() {
  const imgStyle = {
    width: { xs: "320px", sm: "600px", md: "750px", lg: "680px" },
    height: { xs: "213px", sm: "400px", md: "500px", lg: "800px" },
    top: { xs: "2%", sm: "5%", lg: "15%" },
    left: { xs: "0%", sm: "0%", lg: "0%" },
    borderRadius: "20px",
  };
  const fontStyle = {
    fontFamily: "NanumSquareNeo-Variable",
    color: "#fff",
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
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        position="relative"
        sx={{
          maxWidth: {
            xs: "320px",
            sm: "600px",
            md: "750px",
            lg: "1400px",
            xl: "1400px",
            xxl: "1400px",
          },
        }}
      >
        <Grid item xs={12} sm={12} md={7}>
          <Card
            sx={{
              maxWidth: {
                xs: "320px",
                sm: "600px",
                xl: "2000px",
              },
              height: { xs: "380px", sm: "400px", md: "510px", lg: "800px" },
              marginTop: { sm: "20px", lg: "90px" },
            }}
            style={{
              boxShadow: "none",
              backgroundColor: "transparent",
            }}
          >
            <Box
              sx={{
                width: {
                  xs: "320px",
                  sm: "600px",
                  lg: "1400px",
                  xxl: "1400px",
                },
                height: { xs: "400px", sm: "400px", lg: "800px" },
              }}
            />
            <Box
              position="absolute"
              backgroundColor="#0000002b"
              zIndex={5}
              borderRadius="20px"
              sx={imgStyle}
            />

            <Box
              position="absolute"
              component="img"
              sx={{
                ...imgStyle,
                objectFit: "cover",
              }}
              src="https://gtdgolf.co.kr/images/brand/3.Webp"
              alt="GTD ACADEMY & TEAM GEORGE"
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
              fontSize: { xs: "28px", sm: "34px", md: "40px", lg: "82px" },
              lineHeight: { xs: "36px", sm: "46px", lg: "95px" },
              marginTop: { xs: "60px", sm: "80px", lg: "150px" },
              marginBottom: { xs: "250px", sm: "25px", lg: "25px" },
              textAlign: { xs: "center", sm: "left", lg: "right" },
              top: { xs: "5%", sm: "25%", md: "30%", lg: "35%" },
              right: { xs: "18%", sm: "10%", lg: "0%" },
            }}
            style={{
              ...fontStyle,
              fontWeight: 900,
            }}
          >
            GTD Academy
            <br />
            &Team George
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            position="absolute"
            zIndex={7}
            sx={{
              display: { xs: "none", sm: "flex", md: "flex" },
              maxWidth: { xs: "320px", sm: "480px", md: "550px", lg: "650px" },
              fontSize: { xs: "14px", md: "16px", lg: "18px" },
              lineHeight: { lg: "35px" },
              marginBottom: { lg: "20px" },
              fontWeight: { lg: 500 },
              top: { sm: "76%", md: "71%", lg: "85%" },
              right: { sm: "10%", lg: "0%" },
            }}
            style={{
              ...fontStyle,
              textAlign: "right",
            }}
          >
            이후 2012년에 GTD(George Takei Design)브랜드를 탄생시키면서 클럽
            제작과 아마추어 및 주니어들을 육성하는 GTD Academy를 함께
            설립하였으며, JPGA와 JLPGA 프로들을 코치하며, 'Team George'를
            만들었다.
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
              ...fontStyle,
              textAlign: "left",
            }}
          >
            이후 2012년에 GTD(George Takei Design)브랜드를 <br /> 탄생시키면서
            클럽 제작과 아마추어 및 주니어들을 <br /> 육성하는 GTD Academy를
            함께 설립하였으며, JPGA와 JLPGA 프로들을 코치하며, 'Team George'를
            만들었다.
          </Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Academy;
