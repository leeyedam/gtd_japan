import { Box, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import React from "react";
import Slider from "react-slick";
import SEOMetaTag from "../SEOMetaTag";

function AccessoriesProductPageLayout() {
  let product = useParams();
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    dotsClass: "slick-dots",
  };

  const slideImageStyle = {
    height: "100vh",
    width: "100vw",
    objectFit: "cover",
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
    <div className="product-page">
      <SEOMetaTag
        title="ACCESSORIES | GTD golf"
        description="일본 천재 디자이너 조지 다케이가 만들어낸 클럽의 기능을 극대화한 풀티탄 소재의 폭발적 퍼포먼스"
        keywords="GTD, GTD GOLF, GTD KOREA, GOLF BAG"
        imgsrc="https://gtdgolf.co.kr/images/slide/1.Webp"
        url="https://gtdgolf.co.kr/accessories"
      />
      <ThemeProvider theme={theme}>
        <Grid
          container
          columns={{ xs: 4, sm: 12, md: 4, lg: 12, xxl: 12 }}
          sx={{
            paddingTop: {
              md: "180px",
              lg: "160px",
            },
            height: {
              // md: "75vh",
              lg: "85vh",
              xl: "80vh",
            },
          }}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <Grid
            item
            xs={4}
            sm={12}
            md={4}
            lg={3}
            xl={3}
            xxl={3}
            sx={{
              marginTop: { lg: "15px", xl: "32px", xxl: "0px" },
            }}
          >
            <Slider {...settings}>
              <Box
                component="img"
                sx={{
                  objectFit: "cover",
                }}
                src={`https://gtdgolf.co.kr/images/gtdProduct/${product.id}/1.Webp`}
                alt="gtd golf"
              />
              <Box
                component="img"
                sx={{
                  objectFit: "cover",
                }}
                src={`https://gtdgolf.co.kr/images/gtdProduct/${product.id}/2.Webp`}
                alt="gtd golf"
              />
              <Box
                component="img"
                sx={{
                  objectFit: "cover",
                }}
                src={`https://gtdgolf.co.kr/images/gtdProduct/${product.id}/3.Webp`}
                alt="gtd golf"
              />
              <Box
                component="img"
                sx={{
                  objectFit: "cover",
                }}
                src={`https://gtdgolf.co.kr/images/gtdProduct/${product.id}/4.Webp`}
                alt="gtd golf"
              />
              <Box
                component="img"
                sx={{
                  objectFit: "cover",
                }}
                src={`https://gtdgolf.co.kr/images/gtdProduct/${product.id}/5.Webp`}
                alt="gtd golf"
              />
            </Slider>
          </Grid>
          <Grid
            item
            xs={4}
            sm={12}
            md={4}
            lg={4.5}
            xl={4}
            xxl={3.5}
            sx={{
              maxHeight: {
                // md: "350px",
                lg: "380px",
                xl: "620px",
                xxl: "650px",
              },
              overflowY: "scroll",
              overflowX: "hidden",
            }}
          >
            <Box
              component="img"
              sx={{
                maxWidth: {
                  xs: "100%",
                  sm: "100%",
                  // md: "380px",
                  lg: "400px",
                  xl: "680px",
                  xxl: "700px",
                },
                marginLeft: {
                  lg: "55px",
                  xxl: "30px",
                },
                objectFit: "cover",
              }}
              src={`https://gtdgolf.co.kr/images/gtdProduct/${product.id}/6.Webp`}
              alt="gtd golf"
            />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default AccessoriesProductPageLayout;
