import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
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
import MenuItem from "@mui/material/MenuItem";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";

function Navbar() {
  const { user, isAdmin } = useContext(UserContext);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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
    <AppBar sx={{ background: "#000" }} position="sticky">
      <Container spacing={0} maxWidth="xl">
        <Toolbar disableGutters>
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
              <MenuItem component={Link} to={"/store"} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Store</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <ShoppingBagIcon sx={{ display: { xs: "flex" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/store"
            sx={{
              mr: 2,
              display: { xs: "flex" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            eCommerce
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* <Button component={Link} to="/" sx={{ my: 2, color: "white", display: "block" }}>
              Home
            </Button> */}
            <Button component={Link} to="/store" sx={{ my: 2, color: "white", display: "block" }}>
              Store
            </Button>
            {user && isAdmin && (
              <Button
                component={Link}
                to="/dashboard"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Dashboard
              </Button>
            )}
          </Box>
          {user && isAdmin && (
            <>
              <Typography
                sx={{
                  mr: 2,
                  // display: { xs: "flex" },
                  // flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                ADMIN
              </Typography>
            </>
          )}
          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="" src="" />
            </IconButton>

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
              {user && (
                <MenuItem component={Link} to="/profile" onClick={handleCloseUserMenu}>
                  Profile
                </MenuItem>
              )}

              {!user && (
                <MenuItem component={Link} to="/login" onClick={handleCloseUserMenu}>
                  Login
                </MenuItem>
              )}
            </Menu>
          </Box>
          <Tooltip title="See cart">
            <IconButton
              sx={{ mx: 1 }}
              aria-label="cart"
              color="inherit"
              component={Link}
              to="/cart"
            >
              <Badge badgeContent="0" color="error">
                <ShoppingCartIcon sx={{ fontSize: 30 }} />
              </Badge>{" "}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );

  // return (
  //   <AppBar sx={{ background: "#000" }} position="sticky">
  //     <Container spacing={0} maxWidth="xl">
  //       <Toolbar disableGutters>
  //         <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
  //           <IconButton
  //             size="large"
  //             aria-label="account of current user"
  //             aria-controls="menu-appbar"
  //             aria-haspopup="true"
  //             onClick={handleOpenNavMenu}
  //             color="white"
  //           >
  //             <MenuIcon />
  //           </IconButton>
  //           <Menu
  //             id="menu-appbar"
  //             anchorEl={anchorElNav}
  //             anchorOrigin={{
  //               vertical: "bottom",
  //               horizontal: "left",
  //             }}
  //             keepMounted
  //             transformOrigin={{
  //               vertical: "top",
  //               horizontal: "left",
  //             }}
  //             open={Boolean(anchorElNav)}
  //             onClose={handleCloseNavMenu}
  //             sx={{
  //               display: { xs: "block", md: "none" },
  //             }}
  //           >
  //             {pages.map((page, index) => (
  //               <MenuItem key={index} component={Link} to={`${page}`} onClick={handleCloseNavMenu}>
  //                 <Typography textAlign="center">{page}</Typography>
  //               </MenuItem>
  //             ))}
  //           </Menu>
  //         </Box>
  //         <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

  //         <Typography
  //           variant="h5"
  //           noWrap
  //           component="a"
  //           href=""
  //           sx={{
  //             mr: 2,
  //             display: { xs: "flex", md: "none" },
  //             flexGrow: 1,
  //             fontFamily: "monospace",
  //             fontWeight: 700,
  //             letterSpacing: ".3rem",
  //             color: "white",
  //             textDecoration: "none",
  //           }}
  //         >
  //           eCommerce MERN
  //         </Typography>
  //         <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
  //           {pages.map((page, index) => (
  //             <Button
  //               key={index}
  //               component={Link}
  //               to={`${page}`}
  //               onClick={handleCloseNavMenu}
  //               sx={{ my: 2, color: "white", display: "block" }}
  //             >
  //               {page}
  //             </Button>
  //           ))}
  //         </Box>

  //         <Box sx={{ flexGrow: 0 }}>
  //           <Tooltip title="Open settings">
  //             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
  //               <Avatar alt="" src="" />
  //             </IconButton>
  //           </Tooltip>
  //           {!isLoggedIn && (
  //             <Menu
  //               sx={{ mt: "45px" }}
  //               id="menu-appbar"
  //               anchorEl={anchorElUser}
  //               anchorOrigin={{
  //                 vertical: "top",
  //                 horizontal: "right",
  //               }}
  //               keepMounted
  //               transformOrigin={{
  //                 vertical: "top",
  //                 horizontal: "right",
  //               }}
  //               open={Boolean(anchorElUser)}
  //               onClose={handleCloseUserMenu}
  //             >
  //               {settings.map((setting) => (
  //                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
  //                   <Typography textAlign="center">
  //                     <Link to={`${setting}`}>{setting}</Link>
  //                   </Typography>
  //                 </MenuItem>
  //               ))}
  //             </Menu>
  //           )}
  //         </Box>
  //       </Toolbar>
  //     </Container>
  //   </AppBar>
  // );
}

export default Navbar;
