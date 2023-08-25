import React from "react";
import { Box, Typography } from "@mui/material";

function FirstSectionText({ title, top, left, width }) {
  const titleTextStyle = {
    fontSize: { xs: "40px", sm: "76px", md: "96px" },
    textAlign: { xs: "right", sm: "right" },
  };
  const subTitleTextStyle = {
    fontSize: { xs: "18px", sm: "22px", md: "25px" },
    textAlign: { xs: "right", sm: "right" },
  };
  return (
    <Box
      position="absolute"
      zIndex="3"
      sx={{
        top: top,
        left: left,
        width: width,
      }}
    >
      <Typography className="title" variant="h1" sx={titleTextStyle}>
        {title}
      </Typography>
      <Typography className="detail" variant="h3" sx={subTitleTextStyle}>
        Detail View
      </Typography>
    </Box>
  );
}

export default FirstSectionText;
