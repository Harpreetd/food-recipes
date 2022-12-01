import { Container, Box } from "@mui/material";
import React, { FC, useEffect } from "react";
import Menu from "../Components/Menu/Menu";
import RecipeList from "../Components/RecipeList/RecipeList";

import Landing from "../Components/Landing/Landing";
import { useGlobalContext } from "../Context/AppContext";
const Home: FC = () => {
  // const { setUrl } = useGlobalContext();
  // useEffect(() => {
  //   if (setUrl) setUrl("https://www.themealdb.com/api/json/v1/1/search.php?s=");
  // });
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
