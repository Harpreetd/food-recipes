import React from "react";
import { useState, useEffect } from "react";
import RecipeList from "./Components/RecipeList/RecipeList";
import { useFetch } from "./Hooks/useFetch";
import { IMealApiResponse } from "./Interface/Interface";
import Dropdown from "./Components/FilterButtons/FilterButton";
import "./App.css";

const App = () => {
  const [url, setUrl] = useState<string>(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  const [mealData, setMealData] = useState<IMealApiResponse>();
  const [search, setSearch] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectCountry, setSelectCountry] = useState<string>("");

  const hookData = useFetch(url);

  useEffect(() => {
    setMealData(hookData.apiData);
  }, [hookData, url]);
  const countries = () => {
    return ["indian", "canadian", "turkish"];
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
    setSelectCountry(country);
    setUrl(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
  };
  const searchRecipe = () => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  };
  // const searchByCountry = (countryName: string) => {
  //   setUrl(
  //     `https://www.themealdb.com/api/json/v1/1/filter.php?a=${countryName}`
  //   );
  //   console.log("Country button clicked", hookData.apiData);
  // };
  return (
    <>
      <div>
        <div>
          {selectCountry ? `You selected ${selectCountry}` : `Select a country`}
        </div>
        <button
          onClick={(): void => toggleDropdown()}
          onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
            dismissHandler(e)
          }
        >
          <div>{selectCountry ? "Select: " + selectCountry : "Select..."}</div>
          {showDropdown && (
            <Dropdown
              countries={countries()}
              showDropdown={false}
              toggleDropdown={(): void => toggleDropdown()}
              countrySelection={countrySelection}
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
      <div>
        {/* <button onClick={() => searchByCountry("indian")}>Cusine</button> */}
      </div>
      <RecipeList mealsList={mealData} />
    </>
  );
};

export default App;
