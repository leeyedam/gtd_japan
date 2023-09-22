import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Tab, Tabs } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import DriverLayout from "./fittingProduct/DriverLayout";
import WoodLayout from "./fittingProduct/WoodLayout";
import IronLayout from "./fittingProduct/IronLayout";
import WedgeLayout from "./fittingProduct/WedgeLayout";
import SEOMetaTag from "../SEOMetaTag";

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate("/fitting", {
      state: {
        idx: newValue,
      },
    });
  };
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1800,
        xl: 2300,
      },
    },
  });

  useEffect(() => {
    if (location.state !== null && location.state.idx !== value) {
      setValue(location.state.idx);
    }
  }, []);

  return (
    <div className="fitting">
      <SEOMetaTag
        title="FITTING | GTD golf"
        description="Beginning of Triple Titan 트리플 티탄 드라이버의 시작"
      />
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
              xl: "440px",
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
            <DriverLayout />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <WoodLayout />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <IronLayout />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <WedgeLayout />
          </TabPanel>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default React.memo(Fitting);
