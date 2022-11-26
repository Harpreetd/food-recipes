import React, { FC } from "react";
import Menu from "../Components/Menu/Menu";
import RecipeList from "../Components/RecipeList/RecipeList";
import Searchbar from "../Components/Searchbar/Searchbar";

const Home: FC = () => {
  return (
    <main>
      <Searchbar />
      <Menu />
      <RecipeList />
    </main>
  );
};

export default Home;
