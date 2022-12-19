import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import TwitterIcon from "@mui/icons-material/Twitter";
import Typography from "@mui/material/Typography";
import { NavLink, useNavigate } from "react-router-dom";

import header from "../../assets/header.jpg";

const pages = ["home", "contact_Us"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      className="appBar"
      style={{
        backgroundColor: "hsl(198, 100%, 96%)",
        color: "black",
        boxShadow: "0 0 0 0",
      }}
    >
      <Container maxWidth="xl" className="my-3">
        <Toolbar className="d-grid p-0">
          <div className="row">
            <div className="col col-md-4 d-flex align-items-center justify-content-center">
              <Box
                className="me-2"
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <img src={header} alt="header pic" width="75px" height="65px" />
              </Box>
              <Typography
                variant="h5"
                noWrap
                onClick={() => navigate("/")}
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  textTransform: "upperCase",
                  letterSpacing: "0.05rem",
                  color: "inherit",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Animal Shelter
              </Typography>
            </div>

            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "grid" } }}
              className="col col-md-7"
            >
              <div className="row">
                <div className="col d-flex align-items-center justify-content-center ps-5">
                  {pages.map((page) => (
                    <div className="mx-3" key={page}>
                      <NavLink
                        key={page}
                        to={`/${page}`}
                        activeclassname="active"
                        className="HeaderRoutes"
                      >
                        {page}
                      </NavLink>
                    </div>
                  ))}
                </div>
                <div className="col">
                  <div className="d-flex gap-3 my-3 flex-fill justify-content-center">
                    <NavLink to="/" style={{ color: "inherit" }}>
                      <LinkedInIcon />
                    </NavLink>
                    <NavLink to="/" style={{ color: "inherit" }}>
                      <TwitterIcon />
                    </NavLink>
                    <NavLink to="/" style={{ color: "inherit" }}>
                      <InstagramIcon />
                    </NavLink>
                  </div>
                </div>
              </div>
            </Box>
          </div>

          <Box
            className="align-items-center flex-nowrap flex-fill"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <div className="col d-flex align-items-center">
              <Box className="me-1">
                <img src={header} alt="header pic" width="50px" height="45px" />
              </Box>
              <Typography
                variant="h5"
                noWrap
                sx={{
                  flexGrow: 1,
                  alignItems: "center",
                  textTransform: "upperCase",
                  letterSpacing: "0.05rem",
                  fontWeight: 600,
                  fontSize: "large",
                  color: "inherit",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/")}
              >
                Animal Shelter
              </Typography>
            </div>
            <div>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                  justifyContent: "flex-end",
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <div key={page} className="my-3 px-3">
                      <NavLink
                        to={`/${page}`}
                        className="HeaderRoutes fs-6"
                        onClick={handleCloseNavMenu}
                      >
                        {page}
                      </NavLink>
                    </div>
                  ))}
                </Menu>
              </Box>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
