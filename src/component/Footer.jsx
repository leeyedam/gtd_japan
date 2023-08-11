import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

function Footer() {
  const linkArray = [
    { text: "개인정보처리방침", link: "#" },
    { text: "이용약관", link: "#" },
    { text: "회사소개", link: "#" },
  ];
  const infoTextStyle = {
    fontSize: { xs: "16px", sm: "16px", md: "14px" },
    textAlign: { xs: "center", sm: "left", md: "left" },
  };
  const titleTextStyle = {
    fontSize: { xs: "16px", sm: "16px", md: "22px" },
    textAlign: { xs: "center", sm: "left", md: "left" },
  };
  return (
    <div className="third-section">
      <Box
        justify="flex-start"
        width="100vw"
        sx={{
          height: { xs: "550px", sm: "420px", md: "280px" },
          maxWidth: { xs: "100vw", sm: "100vw", md: "100vw" },
          overflow: { sm: "hidden", md: "visible" },
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "center", md: "center" },
            alignItems: "center",
            marginTop: { xs: "30px", sm: "30px", md: "130px" },
          }}
        >
          <Divider
            sx={{
              display: { xs: "flex", sm: "flex", md: "flex" },
              width: { xs: "flex", sm: "flex", md: "1800px" },
              marginBottom: { xs: "flex", sm: "flex", md: "60px" },
              border: ".2px solid #2e2e2e",
            }}
          />
          <Grid
            item
            xs={10}
            sm={12}
            md={7}
            sx={{
              paddingLeft: { sm: "60px", md: "400px" },
              textAlign: "left",
            }}
          >
            {/* <Box
              className="img"
              component="img"
              sx={{
                maxHeight: { xs: "80px", sm: "150px" },
                maxWidth: { sm: "150px" },
              }}
              src="images/logo.png"
              alt="gtd"
            /> */}
            <Typography
              sx={titleTextStyle}
              style={{
                fontFamily: "NanumSquareNeo-Variable",
                fontWeight: 700,
                color: "#626262",
              }}
            >
              COMPANY INFO
            </Typography>
            <Typography
              sx={{
                ...infoTextStyle,
                marginBottom: { xs: "flex", sm: "flex", md: "20px" },
              }}
              style={{
                fontFamily: "NanumSquareNeo-Variable",
                fontWeight: 700,
                color: "#626262",
              }}
            >
              회사명 : 주식회사 지티디코리아
              <br /> 대표자 : 김 위 중
              <br /> 사업자등록번호 : 10111—8326161 통신판매업신고번호 :
              제2022-경기하남-2782호
              <br /> 주소 : 경기도 하남시 미사강변한강로 135, 제다동 제6층 644호
              (망월동, 미사강변스카이폴리스지식산업센터)
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
                  fontFamily: "NanumSquareNeo-Variable",
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
                      marginLeft: { xs: "flex", sm: "flex", md: "20px" },
                    }}
                    style={{
                      fontFamily: "NanumSquareNeo-Variable",
                      fontWeight: 700,
                      color: "#626262",
                      textDecoration: "none",
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
              style={{
                fontFamily: "NanumSquareNeo-Variable",
                fontWeight: 700,
                color: "#626262",
                textDecoration: "none",
              }}
            >
              Copyright © 2020 지티디코리아 All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <Typography
              sx={titleTextStyle}
              style={{
                fontFamily: "NanumSquareNeo-Variable",
                fontWeight: 700,
                color: "#626262",
              }}
            >
              CS CENTER
            </Typography>
            <Typography
              sx={{
                marginTop: { xs: "flex", sm: "flex", md: "20px" },
                fontSize: { xs: "16px", sm: "16px", md: "22px" },
              }}
              style={{
                textAlign: "left",
                fontFamily: "NanumSquareNeo-Variable",
                fontWeight: 700,
                color: "#626262",
                textDecoration: "none",
              }}
            >
              031-8028-0395
            </Typography>
            <Typography
              sx={{
                ...infoTextStyle,
                marginTop: { xs: "flex", sm: "flex", md: "10px" },
              }}
              style={{
                fontFamily: "NanumSquareNeo-Variable",
                fontWeight: 700,
                color: "#626262",
                textDecoration: "none",
              }}
            >
              평일 am 9:00 – pm 6:00
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Footer;
