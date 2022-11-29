import React, { useState, useContext, useEffect, ReactNode } from "react";
import { useCallback } from "react";

import {
  ICategory,
  ICountry,
  IIngredient,
  IMealApiResponse,
  IMeals,
} from "../Interface/Interface";

const AppContext = React.createContext<Partial<IMealApiResponse>>([]);
const initialUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const AppProvider = ({ children }: { children: ReactNode }) => {
  const [url, setUrl] = useState<string>(initialUrl);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("a");
  const [meals, setMeals] = useState<IMeals[] | []>([]);
  const [country, setCountry] = useState<ICountry[] | []>([]);
  const [category, setCategory] = useState<ICategory[] | []>([]);
  const [ingredient, setIngredient] = useState<IIngredient[] | []>([]);
  const fetchMeals = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      console.log("url updated", url, searchTerm);
      const data = await response.json();
      const { meals } = data;
      if (meals) {
        const newMeals = meals.map((item: any) => {
          const {
            idMeal,
            strMeal,
            strMealThumb,
            strCategory,
            strArea,
            strInstructions,
            strTags,
            strYoutube,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient13,
            strIngredient14,
            strIngredient15,
            strIngredient16,
          } = item;
          return {
            idMeal,
            strMeal,
            strMealThumb,
            strCategory,
            strArea,
            strInstructions,
            strTags,
            strYoutube,

            strIngredients: [
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5,
              strIngredient6,
              strIngredient7,
              strIngredient8,
              strIngredient9,
              strIngredient10,
              strIngredient11,
              strIngredient12,
              strIngredient13,
              strIngredient14,
              strIngredient15,
              strIngredient16,
            ],
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
    console.log("url after fetchmeal", url);
    return setUrl(initialUrl);
  }, [searchTerm]);

  // fetching from multiple endpoints
  useEffect(() => {
    getAll();
  }, []);
  const getAll: any = () => {
    const allPromises = Promise.all([
      fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list").then(
        (res) => res.json()
      ),
      fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list").then(
        (res) => res.json()
      ),
      fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list").then(
        (res) => res.json()
      ),
    ]).then((values) => {
      setCountry(values[0].meals);
      setCategory(values[1].meals);
      setIngredient(values[2].meals);
    });
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        meals,
        searchTerm,
        setSearchTerm,
        country,
        category,
        ingredient,
        url,
        setUrl,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
