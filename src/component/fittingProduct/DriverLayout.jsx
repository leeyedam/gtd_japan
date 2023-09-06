import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Paper, Grid, Box, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { driverData } from "./driver";
import { Link } from "react-router-dom";

function DriverLayout() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 2600,
      },
    },
  });

  return (
    <div className="fitting">
      <ThemeProvider theme={theme}>
        <Grid
          container
          spacing={{ xs: 2, sm: 4, md: 4, xl: 8 }}
          columns={{ xs: 4, sm: 12, md: 12 }}
          sx={{
            width: {
              xs: "236px",
              sm: "600px",
              md: "1400px",
              xl: "2000px",
            },
            paddingLeft: {
              xs: "0px",
              sm: "30px",
              md: "40px",
              xl: "20px",
            },
          }}
        >
          {driverData.map((data) => (
            <Grid item xs={4} sm={12} md={4} key={data.title}>
              <Link to={`/product/${data.link}`}>
                <Box
                  component="img"
                  sx={{
                    height: {
                      xs: "220px",
                      sm: "480px",
                      md: "422px",
                      xl: "600px",
                    },
                    width: {
                      xs: "220px",
                      sm: "480px",
                      md: "422px",
                      xl: "600px",
                    },
                    objectFit: "cover",
                  }}
                  src={data.img}
                  alt="gtd"
                />
              </Link>
              <Typography component={"div"}>{data.title}</Typography>
              <Typography component={"div"}>{data.price}</Typography>
            </Grid>
          ))}
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default React.memo(DriverLayout);
