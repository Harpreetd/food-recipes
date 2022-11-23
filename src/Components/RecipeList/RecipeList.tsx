import React from "react";
import { IRecipeListProps } from "../../Interface/Interface";

const RecipeList = ({ mealsList }: IRecipeListProps) => {
  return (
    <div>
      {Array.isArray(mealsList)
        ? mealsList.map((meal, index) => {
            return (
              <div key={index}>
                <h2>Recipe Name: {meal.strMeal}</h2>
                <h3>From : {meal.strArea}</h3>
              </div>
            );
          })
        : "No Data Available"}
    </div>
  );
};

export default RecipeList;
