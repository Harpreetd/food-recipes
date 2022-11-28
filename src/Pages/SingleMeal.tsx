import React, { FC, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import RecipeCard from "../Components/RecipeCard/RecipeCard";
import { useGlobalContext } from "../Context/AppContext";
import { IMeals } from "../Interface/Interface";
const newUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
const SingleMeal: FC = () => {
  const { url, setUrl, searchTerm, setSearchTerm, meals } = useGlobalContext();

  const { id } = useParams<string>();
  console.log("single meal", url);
  useEffect(() => {
    if (setUrl) setUrl(`${newUrl}`);
    if (setSearchTerm) setSearchTerm(`${id}`);
    // return;
  }, []);

  // console.log(meals);

  return (
    <div>
      SingleMeal
      <h1>{id}</h1>
      {Array.isArray(meals)
        ? meals.map((meal: IMeals, index: number) => {
            return <RecipeCard key={index} {...meal} />;
          })
        : "No Data Available"}
    </div>
  );
};

export default SingleMeal;
