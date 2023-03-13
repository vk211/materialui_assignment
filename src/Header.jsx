import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import reactlogo from "./Images/reactlogo.svg";
import "./Header.css";
import { Switch } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "./Themeprovider";

const pages = [
  { component: "Demos", id: "#demos" },
  { component: "Home", id: "#home" },
  { component: "Works", id: "#Works" },
  { component: "Service", id: "#Service" },
  { component: "Pricing", id: "#Pricing" },
  { component: "Contact", id: "#Contact" },
];

function ResponsiveAppBar() {
  const { toggleTheme } = useContext(ThemeContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [auth, setAuth] = React.useState(true);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar className="Header_container">
      <Container
        className="Innerheader"
        maxWidth="xl"
        xs={{ color: "black", bgcolor: "white" }}
      >
        <Toolbar disableGutters>
          <img src={reactlogo} alt="" />
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          ></Typography>

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
                <MenuItem key={page.component} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.component}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.component}
                href={page.id}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page.component}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button className="Loginbutton" variant="outlined">
              Login
            </Button>
            <Button className="signup" variant="outlined">
              Signup
            </Button>
            <Switch
              checked={auth}
              onChange={handleChange}
              onClick={toggleTheme}
              aria-label="login switch"
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
