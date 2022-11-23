import React from "react";
import { useState, useEffect } from "react";
import RecipeList from "./Components/RecipeList/RecipeList";
import { useFetch } from "./Hooks/useFetch";
import { MealApiResponse } from "./Interface/Interface";

const App = () => {
  const [mealData, setMealData] = useState<MealApiResponse>();
  const hookData = useFetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );

  useEffect(() => {
    if (hookData) {
      setMealData(hookData.apiData);
    }
  }, [hookData]);
  console.log(mealData);
  return (
    <div>
      <RecipeList mealsList={mealData} />
    </div>
  );
};

export default App;
