import { Grid, Stack } from "@mui/material";
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
    <Stack spacing={2}>
      <Searchbar />
      <Menu />
      <RecipeList />
    </Stack>
  );
};

export default Home;
