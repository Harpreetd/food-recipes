import React, { FC } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#ef5350" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <a href="/">
              <img src="/cook-book.png" alt="cook book logo" className="logo" />
            </a>
          </IconButton>
          <Typography
            variant="h3"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            className="logoText "
          >
            My Cook Book
          </Typography>
          {/* <ul className="nav-links">
            <li>
              <Link to="/">home</Link>
            </li>
          </ul> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
