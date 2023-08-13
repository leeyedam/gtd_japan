import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import { Box, Divider, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
  const [visible, setVisible] = useState(true);
  const [firstStart, setFirstStart] = useState("fade-up");
  let currentIndex = 0;
  const titleTextStyle = {
    fontSize: { xs: "40px", sm: "76px", md: "96px" },
    textAlign: { xs: "right", sm: "right" },
  };
  const subTitleTextStyle = {
    fontSize: { xs: "18px", sm: "22px", md: "25px" },
    textAlign: { xs: "right", sm: "right" },
  };

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setVisible(false) : setVisible(true);
  };

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1800,
      },
    },
  });

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div className="first-section">
        <Slider {...settings}>
          <Box position="relative" align="center" width="100vw" height="100vh">
            <Box
              position="absolute"
              zIndex="3"
              sx={{
                top: { xs: "65%", sm: "62%", md: "33%" },
                left: { xs: "55%", sm: "56%", md: "76%", lg: "77%" },
              }}
            >
              <Typography className="title" variant="h1" sx={titleTextStyle}>
                FITTING
              </Typography>
              <Typography
                className="detail"
                variant="h3"
                sx={subTitleTextStyle}
              >
                Detail View
              </Typography>
            </Box>
            <Box
              component="img"
              sx={{
                height: { xs: "0px", sm: "0px", md: "100vh" },
                width: { xs: "0px", sm: "0px", md: "100vw" },
                objectFit: "cover",
              }}
              src="images/slide/1.Webp"
              alt="gtd"
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
              alt="gtd"
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
            <Box
              position="absolute"
              zIndex="3"
              sx={{
                top: { xs: "65%", sm: "62%", md: "33%" },
                left: { xs: "25%", sm: "28%", md: "56%", lg: "56.5%" },
                width: { md: "40%" },
              }}
            >
              <Typography className="title" variant="h1" sx={titleTextStyle}>
                ACCESSORIES
              </Typography>
              <Typography
                className="detail"
                variant="h3"
                sx={subTitleTextStyle}
              >
                Detail View
              </Typography>
            </Box>
            <Box
              component="img"
              sx={{
                height: { xs: "100vh", sm: "100vh", md: "100vh" },
                width: { xs: "100vw", sm: "100vw", md: "100vw" },
                objectFit: "cover",
              }}
              src="images/slide/10.Webp"
              alt="gtd"
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
            <Box
              data-aos="fade-up"
              position="absolute"
              zIndex="3"
              sx={{
                top: { xs: "66%", sm: "62%", md: "33%" },
                left: { xs: "33%", sm: "35%", md: "56%" },
                width: { md: "40%" },
              }}
            >
              <Typography className="title" variant="h1" sx={titleTextStyle}>
                GUARANTEE
              </Typography>
              <Typography
                className="detail"
                variant="h3"
                sx={subTitleTextStyle}
              >
                Detail View
              </Typography>
            </Box>
            <Box
              component="img"
              sx={{
                height: { xs: "100vh", sm: "100vh", md: "100vh" },
                width: { xs: "100vw", sm: "100vw", md: "100vw" },
                objectFit: "cover",
              }}
              src="images/slide/3.Webp"
              alt="gtd"
              fetchpriority="high"
            />
          </Box>
        </Slider>
      </div>
    </ThemeProvider>
  );
}

export default FirstSection;
