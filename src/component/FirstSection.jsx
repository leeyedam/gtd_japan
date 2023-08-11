import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import { Box, Divider, Typography } from "@mui/material";

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

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <div className="first-section">
      <Slider {...settings}>
        <Box position="relative" align="center" width="100vw" height="100vh">
          <Box
            position="absolute"
            zIndex="3"
            sx={{
              top: { xs: "65%", sm: "62%", md: "33%" },
              left: { xs: "55%", sm: "56%", md: "80%" },
            }}
          >
            <Typography className="title" variant="h1" sx={titleTextStyle}>
              FITTING
            </Typography>
            <Typography className="detail" variant="h3" sx={subTitleTextStyle}>
              Detail View
            </Typography>
          </Box>
          <Box
            component="img"
            sx={{
              height: { xs: "0%", sm: "0%", md: "100%" },
              width: { xs: "0%", sm: "0%", md: "100%" },
              objectFit: "cover",
            }}
            src="images/slide/1.jpg"
            alt="gtd"
          />
          <Box
            component="img"
            sx={{
              height: { xs: "100%", sm: "100%", md: "0%" },
              width: { xs: "100%", sm: "100%", md: "0%" },
              objectFit: "cover",
              objectPosition: "41% 50%",
            }}
            src="images/slide/1_sm.jpg"
            alt="gtd"
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
              left: { xs: "25%", sm: "28%", md: "56%" },
              width: { md: "40%" },
            }}
          >
            <Typography className="title" variant="h1" sx={titleTextStyle}>
              ACCESSORIES
            </Typography>
            <Typography className="detail" variant="h3" sx={subTitleTextStyle}>
              Detail View
            </Typography>
          </Box>
          <Box
            component="img"
            sx={{
              height: { xs: "100%", sm: "100%", md: "100%" },
              width: { xs: "100%", sm: "100%", md: "100%" },
              objectFit: "cover",
            }}
            src="images/slide/10.jpg"
            alt="gtd"
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
            <Typography className="detail" variant="h3" sx={subTitleTextStyle}>
              Detail View
            </Typography>
          </Box>
          <Box
            component="img"
            sx={{
              height: { xs: "100%", sm: "100%", md: "100%" },
              width: { xs: "100%", sm: "100%", md: "100%" },
              objectFit: "cover",
            }}
            src="images/slide/3.jpg"
            alt="gtd"
          />
        </Box>
      </Slider>
    </div>
  );
}

export default FirstSection;
