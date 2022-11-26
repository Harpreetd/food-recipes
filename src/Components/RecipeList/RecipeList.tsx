import React from "react";
import { IMeals, IRecipeListProps } from "../../Interface/Interface";
// import { MealApiResponse } from "../../Interface/Interface";
import RecipeCard from "../RecipeCard/RecipeCard";
import { useGlobalContext } from "../../Context/AppContext";
// import { Interface } from "readline";

const RecipeList = () => {
  const { meals, loading } = useGlobalContext();
  if (loading) {
    return <h2>"laoding..."</h2>;
  }
  if (meals && meals.length < 1) {
    return <h2>"no meals"</h2>;
  }
  return (
    <div>
      <h2>RecipeList</h2>
      <div>
        {Array.isArray(meals)
          ? meals.map((meal: IMeals, index: number) => {
              return <RecipeCard key={index} {...meal} />;
            })
          : "No Data Available"}
      </div>
      {/* {Array.isArray(mealsList)
        ? mealsList.map((meal, index) => {
            return <RecipeCard key={index} value={meal} />;
          })
        : "No Data Available"} */}
    </div>
  );
};

export default RecipeList;
