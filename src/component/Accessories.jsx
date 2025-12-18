import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Tab, Tabs } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import BagLayout from "./accessoriesProduct/BagLayout";
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

function Accessories() {
  const [value, setValue] = useState(0);

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
        xl: 1800,
        xxl: 2300,
      },
    },
  });

  return (
    <div className="fitting">
      <SEOMetaTag
        title="ACCESSORIES | GTD golf"
        description="일본 천재 디자이너 조지 다케이가 만들어낸 클럽의 기능을 극대화한 풀티탄 소재의 폭발적 퍼포먼스"
        keywords="GTD, GTD GOLF"
        imgsrc="https://gtdgolf.co.kr/images/slide/1.Webp"
        url="https://gtdgolf.co.kr/accessories"
      />
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: "transparent",
            display: "flex",
            minHeight: "80vh",
            marginTop: {
              xs: "40px",
              sm: "100px",
              md: "150px",
              xxl: "200px",
            },
            marginLeft: {
              xs: "10px",
              sm: "40px",
              md: "50px",
              lg: "100px",
              xl: "300px",
              xxl: "440px",
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
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "transparent" }}
          >
            <Tab label="BAG" {...a11yProps(0)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <BagLayout />
          </TabPanel>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default React.memo(Accessories);
