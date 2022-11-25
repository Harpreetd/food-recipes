import React from "react";
// import { IRecipeCardProps } from "../../Interface/Interface";
import AppContext, { AppContextConsumer } from "../../Context/AppContext";
const RecipeCard = () => {
  <AppContextConsumer>
    {(AppContext) =>
      AppContext && (
        <div>
          Cusine {AppContext.strArea} <br />
          category {AppContext.strCategory} <br />
          Dish Name {AppContext.strMeal}
        </div>
      )
    }
  </AppContextConsumer>;
};

export default RecipeCard;
