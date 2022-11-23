import React from "react";
import { useState, useEffect } from "react";
import RecipeList from "./Components/RecipeList/RecipeList";
import { useFetch } from "./Hooks/useFetch";
import { MealApiResponse } from "./Interface/Interface";
import "./App.css";

const App = () => {
  const [url, setUrl] = useState<string>(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  const [mealData, setMealData] = useState<MealApiResponse>();
  const [search, setSearch] = useState<string>("");
  const hookData = useFetch(url);

  useEffect(() => {
    if (hookData) {
      setMealData(hookData.apiData);
    }
  }, [hookData]);
  console.log(mealData);

  const searchRecipe = () => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  };
  return (
    <div>
      <div>
        <input
          type="input"
          placeholder="search recipe"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchRecipe}>Search</button>
      </div>

      <RecipeList mealsList={mealData} />
    </div>
  );
};

export default App;
