import React, { FC } from "react";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Searchbar from "../Searchbar/Searchbar";

const Navbar: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <img src="/cook-book.png" alt="cook book logo" className="logo" />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            My Cook Book
          </Typography>
          <Searchbar />
        </Toolbar>
      </AppBar>
    </Box>
    // <nav className="navbar">
    //   <div className="nav-center">
    //     <Link to="/">
    //       <img src="cook-book.png" alt="cook book logo" className="logo" />
    //       <h1>My Cook Book</h1>
    //     </Link>
    //     <ul className="nav-links">
    //       <li>
    //         <Link to="/">home</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">about</Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default Navbar;
