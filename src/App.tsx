/* eslint-disable */
import React from "react";
import { useState, useEffect } from "react";
import RecipeList from "./Components/RecipeList/RecipeList";
import { useFetch } from "./Hooks/useFetch";
import { IMealApiResponse } from "./Interface/Interface";
import Dropdown from "./Components/FilterButtons/Dropdown";

import "./App.css";

const App = () => {
  const [url, setUrl] = useState<string>(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  const [mealData, setMealData] = useState<IMealApiResponse>();
  const [search, setSearch] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectItem, setSelectItem] = useState<string>("");

  const hookData = useFetch(url);

  useEffect(() => {
    setMealData(hookData.apiData);
  }, [hookData, url]);

  const countries = (): string[] => {
    const countryNames: string[] = [];
    if (mealData !== undefined) {
      Array.isArray(mealData)
        ? mealData.map((meal, index) => {
            countryNames.push(meal.strArea);
            return countryNames;
          })
        : "No Data Available";
    } else {
      console.log("no country");
    }
    const uniqueCountryNames = [...new Set(countryNames)];
    console.log("unique country names", uniqueCountryNames);
    return uniqueCountryNames;
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    console.log("inside toggle drop down", countries());
  };
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropdown(false);
    }
  };
  const countrySelection = (country: string): void => {
    setSelectItem(country);
    if (selectItem == "") {
      setUrl("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    } else {
      setUrl(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
    }
    setShowDropdown(!showDropdown);
  };
  const searchRecipe = () => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  };

  return (
    <>
      <div>
        <div>
          {selectItem ? `You selected ${selectItem}` : `Select a country`}
        </div>
        <button
          onClick={(): void => toggleDropdown()}
          onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
            dismissHandler(e)
          }
        >
          <div>{selectItem ? "Select: " + selectItem : "Select..."}</div>
          {showDropdown && (
            <Dropdown
              collection={countries()}
              showDropdown={false}
              toggleDropdown={(): void => toggleDropdown()}
              itemSelection={countrySelection}
            />
          )}
        </button>
        <input
          type="input"
          placeholder="search recipe name"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchRecipe}>Search</button>
      </div>

      <RecipeList mealsList={mealData} />
    </>
  );
};

export default App;
