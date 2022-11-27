import React, { useState, useContext, useEffect, ReactNode } from "react";
import { useCallback } from "react";
import RecipeCard from "../Components/RecipeCard/RecipeCard";
import Test from "../Components/TestComponent/Test";
import { IMealApiResponse, IMeals } from "../Interface/Interface";
const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext<Partial<IMealApiResponse>>([]);

const AppProvider = ({ children }: { children: ReactNode }) => {
  // const [url, setUrl] = useState<string>(
  //   "https://www.themealdb.com/api/json/v1/1/search.php?s="
  // );
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [meals, setMeals] = useState<IMeals[] | []>([]);
  const [country, setCountry] = useState([]);
  const [category, setCategory] = useState([]);
  const [ingredient, setIngredient] = useState([]);
  const fetchMeals = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      console.log("url in fetch", url);
      const data = await response.json();
      console.log(data.meals);
      const { meals } = data;
      if (meals) {
        const newMeals = meals.map((item: IMeals) => {
          const { idMeal, strMeal, strMealThumb, strCategory, strArea } = item;

          return {
            idMeal,
            strMeal,
            strMealThumb,
            strCategory,
            strArea,
          };
        });
        setMeals(newMeals);
      } else {
        setMeals([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchMeals();
  }, [searchTerm]);
  // fetching from multiple endpoints

  useEffect(() => {
    Promise.all([
      fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list").then(
        (res) => res.json()
      ),
      fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list").then(
        (res) => res.json()
      ),
      fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list").then(
        (res) => res.json()
      ),
    ]).then(console.log);
    // .then(([resCountry, resCategory, resIngredient]) => {
    //   return (
    //     <Test
    //       resIngredient={resIngredient.json()}
    //       resCountry={resCountry}
    //       resCategory={resCategory}
    //     />
    //   );
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  }, []);

  return (
    <AppContext.Provider value={{ loading, meals, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

// previous code
// import { createContext, useState, useEffect } from "react";
// import { IMealApiResponse } from "../Interface/Interface";
// const AppContext = createContext<IMealApiResponse | null>(null);

// export const AppContextProvider = AppContext.Provider;
// export const AppContextConsumer = AppContext.Consumer;

// export default AppContext;
