import React, { FC } from "react";
import RecipeList from "../Components/RecipeList/RecipeList";
import Searchbar from "../Components/Searchbar/Searchbar";

const Home: FC = () => {
  return (
    <main>
      <Searchbar />
      <RecipeList />
    </main>
  );
};

export default Home;
