import * as React from "react";
import { AppContextConsumer } from "./Context/AppContext";

export const PostInfo = () => (
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
  </AppContextConsumer>
);
