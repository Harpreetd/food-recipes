import React from "react";
import { IAllIngredients, IIngredient } from "../../Interface/Interface";
// import { IAllIngredients, IMeals } from "../../Interface/Interface";

const IngredientList = ({ strIngredients }: any) => {
  console.log(strIngredients);
  // console.log({ strIngredient1 });
  return (
    <div>
      {Array.isArray(strIngredients)
        ? strIngredients.map((ingredient: string) => <p>{ingredient}</p>)
        : "empty list"}
    </div>
  );
};

export default IngredientList;
