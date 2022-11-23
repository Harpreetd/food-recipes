import React from "react";
import { useState, useEffect } from "react";
import RecipeList from "./Components/RecipeList/RecipeList";
import { useFetch } from "./Hooks/useFetch";
import { IMealApiResponse } from "./Interface/Interface";
import "./App.css";

const App = () => {
  const [url, setUrl] = useState<string>(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  const [mealData, setMealData] = useState<IMealApiResponse>();
  const [search, setSearch] = useState<string>("");
  const hookData = useFetch(url);

  useEffect(() => {
    setMealData(hookData.apiData);
  }, [hookData, url]);

  const searchRecipe = () => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  };
  const searchByCountry = (countryName: string) => {
    setUrl(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${countryName}`
    );
    console.log("Country button clicked", hookData.apiData);
  };
  return (
    <div>
      <div>
        <input
          type="input"
          placeholder="search recipe name"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchRecipe}>Search</button>
      </div>
      <div>
        <button onClick={() => searchByCountry("indian")}>Cusine</button>
      </div>
      <RecipeList mealsList={mealData} />
    </div>
  );
};

export default App;
