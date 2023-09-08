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
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@mui/styles";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../firebase";

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [navSize, setnavSize] = useState("4rem");
  const [navColor, setnavColor] = useState("transparent");
  const [navTypoColor, setNavTypoColor] = useState("#fff");
  const [login, setLogin] = useState(false);
  const buttonStyle = { my: 2, color: "white", display: "block" };
  const logoTextStyle = {
    mr: 2,
    display: { xs: "none", md: "flex" },
    height: "40px",
    textDecoration: "none",
  };
  const left = [
    { name: "BRAND", link: "/brand" },
    { name: "FITTING", link: "/fitting" },
    { name: "ACCESSORIES", link: "/accessories" },
  ];
  const right = [
    { name: "GUARANTEE", link: "/guarantee" },
    { name: login ? "LOGOUT" : "LOGIN", link: "/login" },
    { name: "SIGNUP", link: "/signup" },
  ];

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#292929") : setnavColor("transparent");
    window.scrollY > 10 ? setNavTypoColor("#000") : setNavTypoColor("#fff");
    window.scrollY > 10 ? setnavSize("4rem") : setnavSize("4rem");
  };
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("token") && setLogin(true);
  }, []);

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

  const handleCloseNavMenu = (link) => {
    setAnchorElNav(null);
    navigate(link);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const useStyles = makeStyles({
    root: {
      backgroundColor: "#000",
    },
  });

  const handleLogout = async () => {
    try {
      await signOut(firebaseAuth);
      localStorage.clear();
      window.location.reload();
    } catch (e) {
      console.error(e);
    }
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
              onClose={() => setAnchorElNav(null)}
              sx={{
                display: { xs: "block", md: "none" },
                backgroundColor: "#060606b0",
              }}
            >
              {left.map((page) => {
                return (
                  <MenuItem
                    key={page.name}
                    onClick={() => handleCloseNavMenu(page.link)}
                  >
                    <Typography textAlign="center" color="#fff">
                      {page.name}
                    </Typography>
                  </MenuItem>
                );
              })}
              {right.map((page) => {
                return (
                  <MenuItem
                    key={page.name}
                    onClick={() => handleCloseNavMenu(page.link)}
                  >
                    <Typography textAlign="center" color="#fff">
                      {page.name}
                    </Typography>
                  </MenuItem>
                );
              })}
            </Menu>
            <Typography
              variant="h1"
              noWrap
              textAlign={"center"}
              component="a"
              href="/"
              sx={logoTextStyle}
            >
              <img src={require("../assets/images/logo.png")} alt="logo" />
            </Typography>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-around",
            }}
          >
            {left.map((page) => {
              return (
                <Button key={page.name} sx={buttonStyle}>
                  <Link to={page.link}>{page.name}</Link>
                </Button>
              );
            })}
            <Typography
              variant="h1"
              component="a"
              href="/"
              sx={{
                ...logoTextStyle,
                marginTop: "14px",
              }}
            >
              <img src={require("../assets/images/logo.png")} alt="logo" />
            </Typography>
            {right.map((page) => {
              return login && page.name === "LOGOUT" ? (
                <Button
                  key={page.name}
                  sx={buttonStyle}
                  onClick={() => handleLogout()}
                >
                  <Link to={"/"}>{page.name}</Link>
                </Button>
              ) : (
                <Button key={page.name} sx={buttonStyle}>
                  <Link to={page.link}>{page.name}</Link>
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
