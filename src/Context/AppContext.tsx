import React, { useState, useContext, useEffect, ReactNode } from "react";
import { useCallback } from "react";
import { forEachChild } from "typescript";
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
  const [country, setCountry] = useState({});
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
    console.log("country useeffect", country);
    console.log("Category useeffect", category);
    console.log("ingredient useeffect", ingredient);
  }, [country, category, ingredient]);
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
      setCategory(values[1]);
      setIngredient(values[2]);
    });
  };

  return (
    <AppContext.Provider
      value={{ loading, meals, setSearchTerm, country, category, ingredient }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
