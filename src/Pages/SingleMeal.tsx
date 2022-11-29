import React, { FC, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import IngredientList from "../Components/IngredientList/IngredientList";
import RecipeCard from "../Components/RecipeCard/RecipeCard";
import { useGlobalContext } from "../Context/AppContext";
import { IMeals } from "../Interface/Interface";
const newUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
const SingleMeal: FC = () => {
  const { url, setUrl, setSearchTerm, meals } = useGlobalContext();

  const { id } = useParams<string>();
  useEffect(() => {
    getSingleMeal();
    return;
  }, []);
  const getSingleMeal = () => {
    if (setUrl) setUrl(`${newUrl}`);
    if (setSearchTerm) setSearchTerm(`${id}`);
  };
  console.log(meals);

  return (
    <div>
      SingleMeal
      <h1>{id}</h1>
      {Array.isArray(meals)
        ? meals.map((meal: IMeals) => {
            return (
              <div>
                <div>
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                </div>
                <h3>{meal.strMeal}</h3>
                <h3>{meal.strArea}</h3>
                <p>{meal.strInstructions}</p>
                <IngredientList
                  strIngredients={{
                    strIngredient1: undefined,
                    strIngredient2: undefined,
                    strIngredient3: undefined,
                    strIngredient4: undefined,
                    strIngredient5: undefined,
                    strIngredient6: undefined,
                    strIngredient7: undefined,
                    strIngredient8: undefined,
                    strIngredient9: undefined,
                    strIngredient10: undefined,
                    strIngredient11: undefined,
                    strIngredient12: undefined,
                    strIngredient13: undefined,
                    strIngredient14: undefined,
                    strIngredient15: undefined,
                    strIngredient16: undefined,
                  }}
                  idMeal={""}
                  strArea={""}
                  strCategory={""}
                  strInstructions={""}
                  strMeal={""}
                  strMealThumb={""}
                  strSource={""}
                  strTags={""}
                  strYoutube={""}
                />
              </div>
            );
          })
        : "No Data Available"}
    </div>
  );
};

export default SingleMeal;
