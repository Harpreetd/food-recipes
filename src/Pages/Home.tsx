import { Box, Container, Grid, Stack } from "@mui/material";
import React, { FC, useEffect } from "react";
import Menu from "../Components/Menu/Menu";
import RecipeList from "../Components/RecipeList/RecipeList";
import Searchbar from "../Components/Searchbar/Searchbar";
import { useGlobalContext } from "../Context/AppContext";
const Home: FC = () => {
  const { setSearchTerm } = useGlobalContext();
  useEffect(() => {
    if (setSearchTerm) setSearchTerm("a");
    return;
  }, []);
  return (
    <Container maxWidth="xl">
      {/* <Grid rowSpacing={30}>
        <Grid item> */}
      <Menu />
      {/* </Grid>
        <Grid item> */}

      <RecipeList />
      {/* </Grid>
      </Grid> */}
    </Container>
  );
};

export default Home;
