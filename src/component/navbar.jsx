import * as React from "react";
import AppBar from "@mui/material/AppBar";
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
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { TextField } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import Cookies from "js-cookie";
import { ToggleGlobalDarkMode, getDarkMode } from "../utils/darkmode";
import { getLight } from "../utils/user";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [settings, setSettings] = React.useState([
    "Login",
    "Register",
    "Logout",
  ]);
  const [pages, setPages] = React.useState(["Home", "Feed"]);
  const [darkMode, setDarkMode] = React.useState(getDarkMode());

  React.useEffect(() => {
    if (Cookies.get("jwt")) {
      setSettings(["Logout"]);
      setPages(["Home", "Feed"]);
    } else {
      setSettings(["Login", "Register"]);
      setPages(["Home"]);
    }
  });

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    ToggleGlobalDarkMode();
    console.log(getDarkMode());
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
    window.location.href = "/" + event.currentTarget.textContent.toLowerCase();
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const settingHandler = (event) => {
    if (event.currentTarget.textContent === "Logout") {
      Cookies.remove("jwt");
      document.location.href = "/home";
      return;
    }
    window.location.href = "/" + event.currentTarget.textContent.toLowerCase();
  };

  return (
    <AppBar position="static">
      <Container
        maxWidth="xxl"
        sx={{ backgroundColor: getDarkMode() ? "#DF8EC4" : "grey" }}
      >
        <Toolbar disableGutters>
          <Box
            sx={{
              backgroundColor: "white",
              height: "50px",
              mr: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pl: 1,
              borderRadius: "20px",
            }}
          >
            <Box
              component="img"
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                height: "100%",
              }}
              alt="The house from the offer."
              src="/logo.png"
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              mr: 6,
              height: "30px",
              display: "flex",
              alignItems: "center",
            }}
            onClick={handleDarkMode}
          >
            {darkMode ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontSize: "14px" }}>MODE: </Typography>
                <WbSunnyIcon sx={{ color: "yellow" }} />
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontSize: "14px" }}>MODE: </Typography>
                <DarkModeIcon sx={{ color: "black" }} />
              </Box>
            )}
          </Box>
          <Box
            sx={{
              mr: 4,
              height: "30px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <LightbulbIcon />
            <TextField
              id="standard-read-only-input"
              label="Bulbs"
              value={getLight()}
              InputProps={{
                readOnly: true,
                style: { color: "black" },
              }}
              size="small"
              sx={{ width: "110px" }}
            />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Button
                      onClick={settingHandler}
                      sx={{ my: 2, color: "black", display: "block" }}
                      key={setting}
                    >
                      {setting}
                    </Button>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
