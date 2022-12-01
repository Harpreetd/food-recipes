import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import { Container } from "@mui/material";

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
