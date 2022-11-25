/* eslint-disable */
import React from "react";
import { useState, useEffect } from "react";
import RecipeList from "./Components/RecipeList/RecipeList";
import { useFetch } from "./Hooks/useFetch";
import { IMealApiResponse } from "./Interface/Interface";
import Dropdown from "./Components/FilterButtons/Dropdown";

import "./App.css";
import { PostInfo } from "./Sample";

const App = () => {
  const [url, setUrl] = useState<string>(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  const [mealData, setMealData] = useState<IMealApiResponse>();
  const [search, setSearch] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectItem, setSelectItem] = useState<string>("");
  const [filteredData, setFilteredData] = useState<IMealApiResponse>();
  const hookData = useFetch(url);

  useEffect(() => {
    if (selectItem == "") {
      setMealData(hookData.apiData);
    }
  }, [hookData, url, selectItem]);

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
    return uniqueCountryNames;
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropdown(false);
    }
  };
  const countrySelection = (country: string): void => {
    setSelectItem(country);
    let filteredMeals =
      mealData &&
      mealData.filter((meal: { strArea: string }) => {
        return meal.strArea === country;
      });
    setFilteredData(filteredMeals);
    // setMealData(filteredMeals);
    console.log("meal data inside country fucntion", mealData);
    setShowDropdown(!showDropdown);
  };
  // const searchRecipe = () => {
  //   setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  //   setSelectItem("");
  // };

  const handleSearch = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearch(e.target.value);
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  };

  return (
    <>
      <div>
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
          onChange={(e) => handleSearch(e)}
        />
        {/* <button onClick={searchRecipe}>Search</button> */}
      </div>
      {filteredData && filteredData.length > 0 ? (
        <RecipeList mealsList={filteredData} />
      ) : (
        <RecipeList mealsList={mealData} />
      )}
      <PostInfo />
    </>
  );
};

export default App;
