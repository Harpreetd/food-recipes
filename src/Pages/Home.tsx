import { Container } from "@mui/material";
import React, { FC, useEffect } from "react";
import Menu from "../Components/Menu/Menu";
import RecipeList from "../Components/RecipeList/RecipeList";
import { useGlobalContext } from "../Context/AppContext";
const Home: FC = () => {
  const { setSearchTerm } = useGlobalContext();
  useEffect(() => {
    if (setSearchTerm) setSearchTerm("a");
    return;
  }, []);
  return (
    <Container maxWidth="xl">
      <Menu />
      <RecipeList />
    </Container>
  );
};

export default Home;
