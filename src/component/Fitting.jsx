import React from "react";
import PropTypes from "prop-types";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import FittingLayout from "./fittingProduct/FittingLayout";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function Fitting() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: "transparent",
            display: "flex",
            height: "80vh",
            marginTop: {
              xs: "40px",
              sm: "100px",
              md: "150px",
              xl: "200px",
            },
            marginLeft: {
              xs: "10px",
              sm: "40px",
              md: "300px",
              xl: "800px",
            },
            color: "#fff",
            maxWidth: {
              xs: "356px",
              sm: "800px",
              md: "1800px",
              xl: "2400px",
            },
            justifyContent: "left",
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "transparent" }}
          >
            <Tab label="DRIVER" {...a11yProps(0)} />
            <Tab label="WOOD" {...a11yProps(1)} />
            <Tab label="IRON" {...a11yProps(2)} />
            <Tab label="WEDGE" {...a11yProps(3)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <FittingLayout />
          </TabPanel>
          <TabPanel value={value} index={1}>
            WOOD
          </TabPanel>
          <TabPanel value={value} index={2}>
            IRON
          </TabPanel>
          <TabPanel value={value} index={3}>
            WEDGE
          </TabPanel>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default React.memo(Fitting);
