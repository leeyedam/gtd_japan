import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import FirstSectionText from "./FirstSectionText";

function Signup() {
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
      <ThemeProvider theme={theme}>Signup</ThemeProvider>
    </div>
  );
}

export default React.memo(Signup);
