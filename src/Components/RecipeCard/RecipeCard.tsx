import React from "react";
import { IRecipeCardProps } from "../../Interface/Interface";

const RecipeCard = ({ value }: IRecipeCardProps) => {
  return (
    <div>
      RecipeCard
      {
        <div>
          <img src={value.strMealThumb} alt="food" />
          <h2>{value.strArea}</h2>
        </div>
      }
    </div>
  );
};

export default RecipeCard;
