import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import BrandHistory from "./brand/BrandHistory";
import Academy from "./brand/Academy";
import Change from "./brand/Change";

function Brand() {
  const titleTextStyle = {
    display: { xs: "flex", sm: "flex", md: "flex" },
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
    <div>
      <Box
        align="center"
        width="100vw"
        sx={{
          maxHeight: { xs: "100%", sm: "100%", md: "100%" },
          // maxWidth: { xs: "100vw", sm: "720px", md: "1600px" },
          backgroundColor: { xs: "#111" },
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "center", md: "center" },
            alignItems: "center",
            marginTop: { xs: "100px", sm: "100px", md: "130px" },
            marginBottom: { xs: "20px", sm: "80px", md: "140px" },
          }}
        >
          <BrandHistory />
          <Academy />
          <Change />
        </Grid>
      </Box>
    </div>
  );
}

export default Brand;
