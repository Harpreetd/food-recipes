import { Container, Box } from "@mui/material";
import React, { FC, useEffect } from "react";
import Menu from "../Components/Menu/Menu";
import RecipeList from "../Components/RecipeList/RecipeList";

import Landing from "../Components/Landing/Landing";
import { useGlobalContext } from "../Context/AppContext";
const Home: FC = () => {
  const { setSearchTerm } = useGlobalContext();
  // useEffect(() => {
  //   if (setSearchTerm) setSearchTerm("a");
  //   return;
  // }, []);
  return (
    <Container disableGutters maxWidth={false}>
      <Landing />
      <Container maxWidth="xl" sx={{ padding: 0 }}>
        
        <Menu />
        <RecipeList />
      </Container>
    </Container>
  );
};

export default Home;
