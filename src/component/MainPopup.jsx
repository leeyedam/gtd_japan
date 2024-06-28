import { Box, Button, Modal, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

function MainPopup({ setShowMainPop }) {
  const imgStyle = {
    width: { xs: "100%", sm: "480px", md: "520px", xl: "520px" },
    height: { xs: "350px", sm: "480px", md: "520px" },
  };

  const btnStyle = {
    width: "50%",
    backgroundColor: "#fff",
    color: "#595959",
    borderRadius: "0px",
    fontSize: "16px",
    fontWeight: "bold",
    height: "50px",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#fff",
      boxShadow: "none",
    },
  };

  const closePop = () => {
    setShowMainPop(false);
  };

  const [open, setOpen] = React.useState(true);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const closeTodayPop = () => {
    let expires = new Date();
    expires = expires.setHours(expires.getHours() + 24);
    localStorage.setItem("homeVisited", expires);
    // 현재 시간의 24시간 뒤의 시간을 homeVisited에 저장
    setShowMainPop(false);
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
  return (
    <ThemeProvider theme={theme}>
      <Box
        open={open}
        onClose={handleClose}
        closeAfterTransition
        style={{
          position: "fixed",
          zIndex: "3000",
        }}
        sx={{
          width: { xs: "100%" },
          padding: { xs: "10px" },
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          sx={{
            width: { xs: "95%", sm: "480px", md: "520px", xl: "520px" },
          }}
        >
          <Box
            component="img"
            sx={{
              ...imgStyle,
              objectFit: "cover",
            }}
            src="https://gtdgolf.co.kr/images/gtdPopup.Webp"
            alt="gtdPopup"
          />
          <Box
            style={{
              display: "flex",
            }}
          >
            <Button
              variant="contained"
              onClick={closeTodayPop}
              sx={{
                ...btnStyle,
                borderRight: "1px solid #ccc",
              }}
            >
              오늘 하루 열지 않기
            </Button>
            <Button variant="contained" onClick={closePop} sx={btnStyle}>
              닫기
            </Button>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default MainPopup;
