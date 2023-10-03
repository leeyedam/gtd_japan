import { Box, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import React from "react";
import Slider from "react-slick";
import SEOMetaTag from "../SEOMetaTag";

function FittingProductPageLayout() {
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
        lg: 1800,
        xl: 2300,
      },
    },
  });
  return (
    <div className="product-page">
      <SEOMetaTag
        title="FITTING | GTD golf"
        description="GTD golf"
        keywords="GOLF, GOLF BAG, GEAR, Driver, Wood, Utility, Iron, Wedge, Putter, CLUB, FITTING, Premium"
        imgsrc="https://gtdgolfkorea.web.app/images/slide/1.Webp"
        url="https://gtdgolfkorea.web.app/product"
      />
      <ThemeProvider theme={theme}>
        <Grid
          container
          columns={{ xs: 4, sm: 12, md: 12, lg: 12, xl: 12 }}
          sx={{
            paddingTop: {
              md: "180px",
              lg: "160px",
            },
            height: {
              md: "75vh",
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
            sx={{
              marginTop: { lg: "32px", xl: "0px" },
            }}
          >
            <Slider {...settings}>
              <Box
                component="img"
                sx={{
                  objectFit: "cover",
                }}
                src={require(`../assets/images/gtdProduct/${product.id}/1.jpg`)}
                alt="gtd"
              />
              <Box
                component="img"
                sx={{
                  objectFit: "cover",
                }}
                src={require(`../assets/images/gtdProduct/${product.id}/2.jpg`)}
                alt="gtd"
              />
              <Box
                component="img"
                sx={{
                  objectFit: "cover",
                }}
                src={require(`../assets/images/gtdProduct/${product.id}/3.jpg`)}
                alt="gtd"
              />
              <Box
                component="img"
                sx={{
                  objectFit: "cover",
                }}
                src={require(`../assets/images/gtdProduct/${product.id}/4.jpg`)}
                alt="gtd"
              />
              <Box
                component="img"
                sx={{
                  objectFit: "cover",
                }}
                src={require(`../assets/images/gtdProduct/${product.id}/5.jpg`)}
                alt="gtd"
              />
            </Slider>
          </Grid>
          <Grid
            item
            xs={4}
            sm={12}
            md={4}
            lg={4}
            xl={2}
            sx={{
              maxHeight: {
                md: "400px",
                lg: "620px",
                xl: "900px",
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
                  md: "380px",
                  lg: "700px",
                },
                marginLeft: {
                  lg: "55px",
                  xl: "30px",
                },
                objectFit: "cover",
              }}
              src={require(`../assets/images/gtdProduct/${product.id}/6.jpg`)}
              alt="gtd"
            />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default FittingProductPageLayout;
