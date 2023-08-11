import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
  Typography,
} from "@mui/material";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

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
          maxWidth: { xs: "100vw", sm: "100vw", md: "1200px" },
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
                left: { sm: "5%", md: "38%" },
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
                left: { sm: "5%", md: "38%" },
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
                left: { sm: "17%", md: "52%" },
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
            // data-aos="fade"
            // data-aos-delay="200"
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
                // key 값 item.img로 변경하기!!
                <ImageListItem key={idx}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={item.author}
                    // actionIcon={
                    //   <IconButton
                    //     sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    //     aria-label={`info about ${item.title}`}
                    //   >
                    //     <InfoIcon />
                    //   </IconButton>
                    // }
                  />
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
    img: "images/slide/1.Webp",
    title: "Gtd",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "images/slide/2.Webp",
    title: "Gtd",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "images/slide/3.Webp",
    title: "Gtd",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "images/slide/4.Webp",
    title: "Gtd",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "images/slide/7.Webp",
    title: "Gtd",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "images/slide/8.Webp",
    title: "Gtd",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "images/slide/1.Webp",
    title: "Gtd",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "images/slide/2.Webp",
    title: "Gtd",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "images/slide/3.Webp",
    title: "Gtd",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "images/slide/4.Webp",
    title: "Gtd",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "images/slide/7.Webp",
    title: "Gtd",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "images/slide/8.Webp",
    title: "Gtd",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
];
