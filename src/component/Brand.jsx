import React from "react";
import { Box, Grid } from "@mui/material";
import BrandHistory from "./brand/BrandHistory";
import Academy from "./brand/Academy";
import Change from "./brand/Change";
import SEOMetaTag from "../SEOMetaTag";

function Brand() {
  return (
    <div>
      <SEOMetaTag
        title="GTD golf"
        description="GTD golf"
        keywords="GOLF, GOLF BAG, GEAR, Driver, Wood, Utility, Iron, Wedge, Putter, CLUB, FITTING, Premium"
        imgsrc="https://gtdtest-2.web.app/images/slide/1.Webp"
        url="https://gtdtest-2.web.app/brand"
      />
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
