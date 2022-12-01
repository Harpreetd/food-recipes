import React, { FC } from "react";
import Menu from "../Components/Menu/Menu";
import RecipeList from "../Components/RecipeList/RecipeList";
import Landing from "../Components/Landing/Landing";
import { Container } from "@mui/material";

const Home: FC = () => {
  return (
    <Container disableGutters maxWidth={false}>
      <Landing />
      <Menu />
      <Container maxWidth="xl" sx={{ padding: 0 }}>
        <RecipeList />
      </Container>
    </Container>
  );
};

export default Home;
