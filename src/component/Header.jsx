import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Icon } from "@mui/material";
import { makeStyles } from "@mui/styles";

const left = ["BRAND", "FITTING", "ACCESSORIES"];
const right = ["GUARANTEE", "LOGIN", "SIGNUP"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const useStyles = makeStyles({
  root: {
    backgroundColor: "#000",
  },
});

function Header() {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [navSize, setnavSize] = useState("4rem");
  const [navColor, setnavColor] = useState("transparent");
  const [navTypoColor, setNavTypoColor] = useState("#fff");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#292929") : setnavColor("transparent");
    window.scrollY > 10 ? setNavTypoColor("#000") : setNavTypoColor("#fff");
    window.scrollY > 10 ? setnavSize("4rem") : setnavSize("4rem");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      className="header"
      color="transparent"
      position="fixed"
      elevation={0}
      style={{
        backgroundColor: navColor,
        height: navSize,
        transition: "all 1s",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#fff" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                backgroundColor: "#060606b0",
              }}
            >
              {left.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" color="#fff">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
              {right.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ backgroundColor: "transparent" }}
                >
                  <Typography textAlign="center" color="#fff">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
            <Typography
              variant="h1"
              noWrap
              textAlign={"center"}
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                height: "40px",
                textDecoration: "none",
              }}
            >
              <img src="images/logo.png" alt="logo" />
            </Typography>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-around",
            }}
          >
            {left.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
            <Typography
              variant="h1"
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                marginTop: "14px",
                height: "40px",
                textDecoration: "none",
              }}
            >
              <img src="images/logo.png" alt="logo" />
            </Typography>
            {right.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
