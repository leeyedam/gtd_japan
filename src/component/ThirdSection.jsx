import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
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
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="third-section">
        <Box
          align="center"
          width="100vw"
          sx={{
            position: "relative",
            height: { xs: "550px", sm: "420px", md: "650px" },
            maxWidth: { xs: "100vw", sm: "100vw", md: "100vw" },
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
                md: "space-between",
              },
              alignItems: "center",
              marginTop: { xs: "30px", sm: "30px", md: "130px" },
            }}
          >
            <Grid
              item
              xs={10}
              sm={12}
              md={7}
              lg={8}
              data-aos="fade-up"
              data-aos-delay="300"
              sx={{
                paddingLeft: {
                  sm: "60px",
                  md: "360px",
                  lg: "400px",
                  xl: "480px",
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
                  fontSize: { xs: "36px", sm: "44px", md: "84px", lg: "86px" },
                  lineHeight: { xs: "42px", sm: "52px", md: "95px" },
                  marginTop: { xs: "60px", sm: "80px", md: "150px" },
                  marginBottom: { xs: "250px", sm: "25px", md: "25px" },
                  textAlign: { xs: "center", sm: "left", md: "left" },
                }}
                style={{
                  fontFamily: "NanumSquareNeo-Variable",
                  fontWeight: 900,
                  color: "#8f8f8f",
                }}
              >
                Beginning Of
                <br /> Triple Titan
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "16px", md: "18px" },
                  textAlign: { xs: "center", sm: "left", md: "left" },
                }}
                style={{
                  fontFamily: "NanumSquareNeo-Variable",
                  fontWeight: 700,
                  color: "#626262",
                }}
              >
                BLACK ICE 저변에 깔린 잠재적인 두려움
                <br /> 두려움을 극복하는 완벽한 샷의 시작
                <br /> 일본 천재 디자이너가 만들어낸 클럽의 기능을 극대화한
                풀티탄 소재의
                <br /> 폭발적 퍼포먼스 GTD BLACK ICE SERIES로 필드에서 직접
                경험해보세요.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <Card
                sx={{
                  position: "absolute",
                  top: { xs: "37%", sm: "5%", md: "-20%" },
                  right: { xs: "20%", sm: "-10%", md: "8%" },
                  maxHeight: { xs: "220px", sm: "480px", md: "1000px" },
                  maxWidth: { xs: "220px", sm: "480px", md: "100%" },
                  marginTop: { md: "30px" },
                }}
                style={{ boxShadow: "none", backgroundColor: "transparent" }}
              >
                <Box
                  component="img"
                  sx={{
                    maxHeight: {
                      xs: "100%",
                      sm: "100%",
                      md: "750px",
                      lg: "800px",
                    },
                    maxWidth: {
                      xs: "100%",
                      sm: "100%",
                      md: "750px",
                      lg: "800px",
                    },
                    objectFit: "cover",
                  }}
                  src="images/slide/16.png"
                  alt="gtd"
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default ThirdSection;
