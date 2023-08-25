import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import FirstSectionText from "./FirstSectionText";

function Login() {
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
    <ThemeProvider theme={theme}>
      <div className="first-section">login</div>
    </ThemeProvider>
  );
}

export default React.memo(Login);
