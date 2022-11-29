import React from "react";

const IngredientList = ({ strIngredients }: any) => {
  return (
    <div>
      {Array.isArray(strIngredients) ? (
        strIngredients.map((ingredient: string, index: number) => (
          <p key={index}>{ingredient}</p>
        ))
      ) : (
        <p>"empty"</p>
      )}
    </div>
  );
};

export default IngredientList;
