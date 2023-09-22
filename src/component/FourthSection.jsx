import React from "react";
import {
  Box,
  Card,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";

function FourthSection() {
  const titleTextStyle = {
    display: { xs: "none", sm: "flex", md: "flex" },
    position: "absolute",
    fontSize: { xs: "26px", sm: "38px", md: "76px" },
    lineHeight: { xs: "40px", sm: "55px", md: "95px" },
    marginTop: { xs: "30px" },
    marginBottom: { xs: "10px", sm: "25px", md: "25px" },
  };
  const titleFontStyle = {
    fontFamily: "Giants-Inline",
    fontWeight: 900,
    textAlign: "left",
  };
  return (
    <div className="fourth-section">
      <Box
        align="center"
        width="100vw"
        overflow="hidden"
        sx={{
          maxHeight: { xs: "100%", sm: "100%", md: "100%" },
          maxWidth: { xs: "100vw", sm: "100vw", md: "1200px", xl: "1400px" },
          backgroundColor: { xs: "#111" },
        }}
      >
        <Grid
          container
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: { xs: "center", sm: "center", md: "space-between" },
            alignItems: "center",
            marginTop: { xs: "100px", sm: "130px", md: "130px" },
            marginBottom: { xs: "10px", sm: "80px", md: "70px" },
          }}
        >
          <Grid item xs={12} sm={12} md={6}>
            <Typography
              data-aos="fade-right"
              data-aos-delay="200"
              sx={{
                ...titleTextStyle,
                top: { sm: "2%", md: "15%" },
                left: { sm: "5%", md: "38%", xl: "33%" },
              }}
              style={{
                ...titleFontStyle,
                color: "#cacaca",
              }}
            >
              User Reviews Of
            </Typography>
            <Typography
              data-aos="fade-right"
              data-aos-delay="200"
              sx={{
                ...titleTextStyle,
                top: { sm: "7%", md: "27%" },
                left: { sm: "5%", md: "38%", xl: "33%" },
              }}
              style={{
                ...titleFontStyle,
                color: "#cacaca",
              }}
            >
              The
            </Typography>
            <Typography
              data-aos="fade-right"
              data-aos-delay="200"
              sx={{
                ...titleTextStyle,
                top: { sm: "7%", md: "27%" },
                left: { sm: "17%", md: "45%" },
              }}
              style={{
                ...titleFontStyle,
                color: "#aa2727",
              }}
            >
              GTD Golf
            </Typography>
            <Box
              className="img"
              component="img"
              sx={{
                display: { xs: "flex", sm: "none", md: "none" },
                position: "absolute",
                top: { xs: "-3%", sm: "-8%" },
                left: { xs: "3%", sm: "8%" },
                maxHeight: { xs: "80px", sm: "150px" },
                maxWidth: { sm: "150px" },
              }}
              src="images/title3.png"
              alt="gtd"
            />
            <Card
              sx={{
                maxHeight: { xs: "400px", sm: "700px", md: "1000px" },
                maxWidth: { xs: "320px", sm: "600px", md: "100%" },
                marginTop: { md: "30px" },
              }}
              style={{ boxShadow: "none", backgroundColor: "transparent" }}
            >
              <Box
                component="img"
                sx={{
                  maxHeight: { xs: "100%", sm: "100%", md: "830px" },
                  maxWidth: { xs: "100%", sm: "100%", md: "100%" },
                }}
                src="images/slide/17.Webp"
                alt="gtd"
              />
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              marginTop: { xs: "40px", sm: "80px", md: "400px" },
              paddingLeft: { md: "50px" },
              justifyContent: "center",
            }}
          >
            <ImageList
              sx={{
                width: { xs: 320, sm: 600, md: 550 },
                height: { xs: 320, sm: 480, md: 455 },
              }}
            >
              {itemData.map((item, idx) => (
                <ImageListItem
                  key={item.img}
                  sx={{
                    maxHeight: { md: "200px" },
                  }}
                >
                  <a href={item.link} target="_blank">
                    <img
                      className="list-img"
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </a>
                  <ImageListItemBar title={item.title} subtitle={item.author} />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default FourthSection;

const itemData = [
  {
    img: "images/review/1.Webp",
    title: "GTD Driver",
    author: "@버디천재",
    link: "https://blog.naver.com/sue21/222957413546?&isInf=true",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "images/review/2.Webp",
    title: "GTD BLACK ICE 460",
    author: "@스윙영웅",
    link: "https://blog.naver.com/jhstyle1020/223208044910?&isInf=true",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "images/review/3.Webp",
    title: "GTD Driver",
    author: "@버디천재",
    link: "https://blog.naver.com/sue21/222720440670",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "images/review/4.Webp",
    title: "GTD 455",
    author: "@super moon",
    link: "https://blog.naver.com/mcteens/221049966134",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "images/review/5.Webp",
    title: "GT 455 Plus 2",
    author: "@피그몬",
    link: "https://blog.naver.com/wakai99/222647796593?&isInf=true",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "images/review/6.Webp",
    title: "GTD BLACK ICE 460",
    author: "@sonjwi",
    link: "https://www.instagram.com/p/CaYxA9KpNso/?img_index=1",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "images/review/7.Webp",
    title: "GTD BLACK ICE 460",
    author: "@songdo_aboutgolf",
    link: "https://www.instagram.com/p/CwrHToMvJUM/?img_index=1",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "images/review/8.Webp",
    title: "BLACK ICE THE MAX",
    author: "@jewelry__pro",
    link: "https://www.instagram.com/p/CumMJphLM1s/?img_index=1",
    rows: 2,
    cols: 2,
    featured: true,
  },
];
