import React from "react";
import { IMeals } from "../../Interface/Interface";

const IngredientList = ({ strIngredients }: IMeals) => {
  console.log(strIngredients);
  return (
    <div>
      <h3>{strIngredients.strIngredient10}</h3>
    </div>
  );
};

export default IngredientList;
