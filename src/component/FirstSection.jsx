import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import FirstSectionText from "./FirstSectionText";

function FirstSection() {
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
      },
    },
  });

  return (
    <div className="first-section">
      <ThemeProvider theme={theme}>
        <Slider {...settings}>
          <Box position="relative" align="center" width="100vw" height="100vh">
            <FirstSectionText
              title="FITTING"
              link="/fitting"
              top={{ xs: "65%", sm: "62%", md: "33%" }}
              left={{ xs: "55%", sm: "56%", md: "76%", lg: "77%", xl: "80%" }}
              width={{ md: "none" }}
            />
            <Box
              component="img"
              sx={{
                height: { xs: "0px", sm: "0px", md: "100vh" },
                width: { xs: "0px", sm: "0px", md: "100vw" },
                objectFit: "cover",
              }}
              src="images/slide/1.Webp"
              alt="FITTING LINE"
              fetchpriority="high"
            />
            <Box
              component="img"
              sx={{
                height: { xs: "100vh", sm: "100vh", md: "0px" },
                width: { xs: "100vw", sm: "100vw", md: "0px" },
                objectFit: "cover",
                objectPosition: "41% 50%",
              }}
              src="images/slide/1_sm.Webp"
              alt="FITTING LINE"
              fetchpriority="high"
            />
          </Box>
          <Box
            position="relative"
            align="center"
            justify="center"
            width="100vw"
            height="100vh"
          >
            <FirstSectionText
              title="ACCESSORIES"
              link="/accessories"
              top={{ xs: "65%", sm: "62%", md: "33%" }}
              left={{ xs: "25%", sm: "28%", md: "56%", lg: "56.5%" }}
              width={{ md: "40%" }}
            />
            <Box
              component="img"
              sx={slideImageStyle}
              src="images/slide/10.Webp"
              alt="ACCESSORIES LINE"
              fetchpriority="high"
            />
          </Box>
          <Box
            position="relative"
            align="center"
            justify="center"
            width="100vw"
            height="100vh"
          >
            <FirstSectionText
              title="GUARANTEE"
              link="guarantee"
              top={{ xs: "66%", sm: "62%", md: "33%" }}
              left={{ xs: "33%", sm: "35%", md: "56%" }}
              width={{ md: "40%" }}
            />
            <Box
              component="img"
              sx={slideImageStyle}
              src="images/slide/3.Webp"
              alt="GUARANTEE"
              fetchpriority="high"
            />
          </Box>
        </Slider>
      </ThemeProvider>
    </div>
  );
}

export default React.memo(FirstSection);
