import { Container, Box } from "@mui/material";
import React, { FC, useEffect } from "react";
import Menu from "../Components/Menu/Menu";
import RecipeList from "../Components/RecipeList/RecipeList";
import Searchbar from "../Components/Searchbar/Searchbar";
import Landing from "../Components/Landing/Landing";
import { useGlobalContext } from "../Context/AppContext";
const Home: FC = () => {
  const { setSearchTerm } = useGlobalContext();
  // useEffect(() => {
  //   if (setSearchTerm) setSearchTerm("a");
  //   return;
  // }, []);
  return (
    <Box sx={{ flexGrow: 1, padding: 0 }}>
      <Landing />
      <Container maxWidth="xl">
        <Searchbar />
        <Menu />
        <RecipeList />
      </Container>
    </Box>
  );
};

export default Home;
