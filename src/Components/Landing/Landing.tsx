import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import { Container, Box } from "@mui/material";
import Menu from "../Menu/Menu";
const Landing = () => {
  return (
    <Container
      sx={{ flexGrow: 1, height: 600 }}
      disableGutters
      maxWidth={false}
    >
      <div className="backgroundImg">
        <Searchbar />
      </div>
    </Container>
  );
};

export default Landing;
