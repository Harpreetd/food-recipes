import React, { useState, useContext, useEffect, ReactNode } from "react";
import { useCallback } from "react";
import { IMealApiResponse, IMeals } from "../Interface/Interface";
const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext<Partial<IMealApiResponse>>([]);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("a");
  const [meals, setMeals] = useState<IMeals[] | []>([]);

  const fetchMeals = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      console.log(data);
      const { meals } = data;
      if (meals) {
        const newMeals = meals.map((item: IMeals) => {
          const { idMeal, strMeal, strMealThumb, strCategory, strArea } = item;
          return {
            id: idMeal,
            name: strMeal,
            image: strMealThumb,
            category: strCategory,
            area: strArea,
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
  }, [searchTerm, fetchMeals]);
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
