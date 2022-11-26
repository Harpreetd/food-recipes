import React from "react";
import { Link } from "react-router-dom";
import { IMeals, IRecipeCardProps } from "../../Interface/Interface";
// import { IRecipeCardProps } from "../../Interface/Interface";
// import AppContext, { AppContextConsumer } from "../../Context/AppContext";
const RecipeCard = ({
  idMeal,
  strMeal,
  strCategory,
  strMealThumb,
  strArea,
}: IMeals) => {
  return (
    <article>
      <div>
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div>
        <h3>{strMeal}</h3>
        <h4>{strArea}</h4>
        <p>
          {idMeal}
          {strCategory}
        </p>
      </div>
    </article>
  );
  // <AppContextConsumer>
  //   {(AppContext) =>
  //     AppContext && (
  //       <div>
  //         Cusine {AppContext.strArea} <br />
  //         category {AppContext.strCategory} <br />
  //         Dish Name {AppContext.strMeal}
  //       </div>
  //     )
  //   }
  // </AppContextConsumer>;
};

export default RecipeCard;
