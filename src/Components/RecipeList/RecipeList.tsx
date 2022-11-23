import React from "react";
import { IRecipeListProps } from "../../Interface/Interface";
// import { MealApiResponse } from "../../Interface/Interface";
import RecipeCard from "../RecipeCard/RecipeCard";

const RecipeList = ({ mealsList }: IRecipeListProps) => {
  return (
    <div>
      {Array.isArray(mealsList)
        ? mealsList.map((meal, index) => {
            return <RecipeCard key={index} value={meal} />;
          })
        : "No Data Available"}
    </div>
  );
};

export default RecipeList;
