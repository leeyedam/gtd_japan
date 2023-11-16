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
        title="GTD golf | Brand"
        description="일본 천재 디자이너 조지 다케이가 만들어낸 클럽의 기능을 극대화한 풀티탄 소재의 폭발적 퍼포먼스"
        keywords="GTD, GTD GOLF, GTD 드라이버, gtd 골프, 지티디, 지티디 골프, 지티디 드라이버"
        imgsrc="https://gtdgolfkorea.web.app/images/slide/1.Webp"
        url="https://gtdgolfkorea.web.app/brand"
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
