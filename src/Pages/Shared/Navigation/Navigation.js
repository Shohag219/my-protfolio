import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Container, CssBaseline } from "@mui/material";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import PDF from "../../../images/mahmudul-resume (2).pdf";

import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";
import { NavLink } from "react-router-dom";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#home"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Navigation(props) {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <a style={{ textDecoration: "none", color: "#262626" }} href="#home">
          <Button color="inherit">Home</Button>
        </a>
      </MenuItem>
      <MenuItem>
        <a style={{ textDecoration: "none", color: "#262626" }} href="#about">
          <Button color="inherit">About</Button>
        </a>
      </MenuItem>
      <MenuItem>
        <a
          style={{ textDecoration: "none", color: "#262626" }}
          href="#services"
        >
          <Button color="inherit">Services</Button>
        </a>
      </MenuItem>
      <MenuItem>
        <a style={{ textDecoration: "none", color: "#262626" }} href="#skills">
          <Button color="inherit">Skills</Button>
        </a>
      </MenuItem>
      <MenuItem>
        <NavLink to="/projects">
          <Button color="inherit">Projects</Button>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <a style={{ textDecoration: "none", color: "#262626" }} href="#contact">
          <Button color="inherit">Contact</Button>
        </a>
      </MenuItem>
      <MenuItem>
        <a
          href={PDF}
          download="Resume of mahmudul-resume"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Button variant="contained" color="error" sx={{ px: 4, py: 2 }}>
            Download Resume
          </Button>
        </a>
      </MenuItem>
    </Menu>
  );

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <CssBaseline />
        <HideOnScroll {...props} sx={{ backgroundColor: "#666" }}>
          <AppBar sx={{ backgroundColor: "#050505" }}>
            <Container>
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                >
                  <Typography
                    sx={{ fontSize: "24px", fontWeight: 600 }}
                    noWrap
                    component="div"
                  >
                    Mahmu<span style={{ color: "crimson" }}>Dul</span>
                  </Typography>
                </IconButton>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="#home"
                  >
                    <Button color="inherit">Home</Button>
                  </a>
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="#about"
                  >
                    <Button color="inherit">About</Button>
                  </a>
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="#services"
                  >
                    <Button color="inherit">Services</Button>
                  </a>
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="#skills"
                  >
                    <Button color="inherit">Skills</Button>
                  </a>
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="#projects"
                  >
                    <Button color="inherit">Projects</Button>
                  </a>
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="#contact"
                  >
                    <Button color="inherit">Contact</Button>
                  </a>
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="#blog"
                  >
                    <Button color="inherit">Blogs</Button>
                  </a>
                  <a
                    href={PDF}
                    download="Resume of mahmudul-resume"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Button variant="contained" color="error" sx={{ ml: 2 }}>
                      Download Resume
                    </Button>
                  </a>
                </Box>
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </HideOnScroll>
        {renderMobileMenu}
      </Box>
      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
