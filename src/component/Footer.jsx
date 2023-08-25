import React from "react";
import { Box, Divider, Grid, Typography, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

function Footer() {
  const linkArray = [
    { text: "개인정보처리방침", link: "#" },
    { text: "이용약관", link: "#" },
    { text: "회사소개", link: "#" },
  ];
  const infoTextStyle = {
    fontSize: { xs: "12px", sm: "16px", md: "14px" },
    textAlign: { xs: "left", sm: "left", md: "left" },
    fontWeight: { sm: 700 },
    fontFamily: {
      xs: "NanumBarunGothic",
      sm: "NanumBarunGothic",
      md: "NanumSquareNeo-Variable",
    },
  };
  const titleTextStyle = {
    fontSize: { xs: "16px", sm: "20px", md: "22px" },
    textAlign: { xs: "left", sm: "left", md: "left" },
    fontWeight: { sm: 900 },
    fontFamily: {
      xs: "NanumBarunGothic",
      sm: "NanumBarunGothic",
      md: "NanumSquareNeo-Variable",
    },
  };
  const defaultTextStyle = {
    textAlign: "left",
    fontWeight: 700,
    color: "#626262",
    textDecoration: "none",
  };
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 2600,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="footer">
        <Box
          width="100vw"
          sx={{
            height: { xs: "270px", sm: "330px", md: "320px" },
            maxWidth: { xs: "100vw", sm: "100vw", md: "100vw" },
            overflow: { sm: "hidden", md: "visible" },
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "center", md: "center" },
              marginTop: { xs: "30px", sm: "30px", md: "130px" },
            }}
          >
            <Divider
              sx={{
                display: { xs: "flex", sm: "flex", md: "flex" },
                width: { xs: "100vw", sm: "100vw", md: "1800px", xl: "2400px" },
                marginBottom: { xs: "40px", sm: "60px", md: "60px" },
                border: ".2px solid #2e2e2e",
              }}
            />
            <Grid
              item
              xs={10}
              sm={12}
              md={7}
              sx={{
                paddingLeft: {
                  sm: "40px",
                  md: "350px",
                  lg: "440px",
                  xl: "1000px",
                },
                textAlign: "left",
              }}
            >
              <Typography
                sx={titleTextStyle}
                style={{
                  fontWeight: 700,
                  color: "#626262",
                }}
              >
                COMPANY INFO
              </Typography>
              <Typography
                sx={{
                  ...infoTextStyle,
                  marginTop: { xs: "10px", sm: "10px", md: "15px" },
                  marginBottom: { xs: "flex", sm: "flex", md: "20px" },
                }}
                style={{
                  fontWeight: 700,
                  color: "#626262",
                }}
              >
                회사명 : 주식회사 지티디코리아
                <br /> 대표자 : 김 위 중
                <br /> 사업자등록번호 : 110111—8326161
                <br /> 주소 : 경기도 하남시 미사강변한강로 135, 제다동 제6층
                644호 (망월동, 미사강변스카이폴리스지식산업센터)
              </Typography>
              {linkArray.map((arr, idx) => (
                <Typography
                  key={idx}
                  component="a"
                  href={arr.link}
                  sx={{
                    ...infoTextStyle,
                    marginRight: "20px",
                  }}
                  style={{
                    fontWeight: 700,
                    color: "#626262",
                    textDecoration: "none",
                  }}
                >
                  {arr.text}
                  {idx !== 2 && (
                    <Typography
                      component="span"
                      sx={{
                        ...infoTextStyle,
                      }}
                      style={{
                        fontWeight: 700,
                        color: "#626262",
                        textDecoration: "none",
                        marginLeft: "20px",
                      }}
                    >
                      |
                    </Typography>
                  )}
                </Typography>
              ))}
              <Typography
                sx={{
                  ...infoTextStyle,
                  marginTop: { xs: "flex", sm: "flex", md: "20px" },
                }}
                style={defaultTextStyle}
              >
                Copyright © 2020 지티디코리아 All rights reserved.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              sx={{
                display: { xs: "none", md: "flex" },
                paddingLeft: { md: "30px", lg: "0px" },
                flexDirection: { md: "column" },
              }}
            >
              <Typography
                sx={titleTextStyle}
                style={{
                  fontWeight: 700,
                  color: "#626262",
                }}
              >
                CS CENTER
              </Typography>
              <Typography
                sx={{
                  marginTop: { md: "15px" },
                  fontSize: { md: "24px" },
                  fontFamily: {
                    md: "NanumSquareNeo-Variable",
                  },
                }}
                style={defaultTextStyle}
              >
                070-4286-1170
              </Typography>
              <Typography
                sx={{
                  ...infoTextStyle,
                  marginTop: { md: "10px" },
                }}
                style={defaultTextStyle}
              >
                평일 am 9:00 – pm 6:00
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default Footer;
