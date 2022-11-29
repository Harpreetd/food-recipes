import React, { FC } from "react";
import { useParams } from "react-router-dom";
import IngredientList from "../Components/IngredientList/IngredientList";
import { useGlobalContext } from "../Context/AppContext";
import { IMeals } from "../Interface/Interface";

const SingleMeal: FC = () => {
  const { meals } = useGlobalContext();

  const { id } = useParams<string>();

  return (
    <div>
      SingleMeal
      <h1>{id}</h1>
      {Array.isArray(meals)
        ? meals.map((meal: IMeals, index: number) => {
            if (meal.idMeal === id) {
              return (
                <div key={index}>
                  <div>
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                  </div>
                  <h3>{meal.strMeal}</h3>
                  <h3>{meal.strArea}</h3>
                  <p>{meal.strInstructions}</p>
                  <IngredientList strIngredients={meal.strIngredients} />
                </div>
              );
            }
            return null;
          })
        : "No Data Available"}
    </div>
  );
};

export default SingleMeal;
