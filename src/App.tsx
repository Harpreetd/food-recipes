/* eslint-disable */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SingleMeal from "./Pages/SingleMeal";
import Error from "./Pages/Error";
import Navbar from "./Components/Navbar/Navbar";
import { useState, useEffect } from "react";
import RecipeList from "./Components/RecipeList/RecipeList";
// import { useFetch } from "./Hooks/useFetch";
import { IMealApiResponse } from "./Interface/Interface";
import Dropdown from "./Components/FilterButtons/Dropdown";

import "./App.css";
// import { PostInfo } from "./Sample";
// import { AppContextProvider } from "./Context/AppContext";
import About from "./Pages/About";

// const sampleAppContext: IMealApiResponse = {
//   length: 2,
//   strArea: "Indian",
//   strCategory: "vegeterian",
//   strMeal: "Daal Makhni",
// };
const App = () => {
  // const [url, setUrl] = useState<string>(
  //   "https://www.themealdb.com/api/json/v1/1/search.php?s="
  // );
  // const [mealData, setMealData] = useState<IMealApiResponse>();
  // const [search, setSearch] = useState<string>("");
  // const [showDropdown, setShowDropdown] = useState<boolean>(false);
  // const [selectItem, setSelectItem] = useState<string>("");
  // const [filteredData, setFilteredData] = useState<IMealApiResponse>();
  // const hookData = useFetch(url);

  // useEffect(() => {
  //   if (selectItem == "") {
  //     setMealData(hookData.apiData);
  //   }
  // }, [hookData, url, selectItem]);

  // const countries = (): string[] => {
  //   const countryNames: string[] = [];
  //   if (mealData !== undefined) {
  //     Array.isArray(mealData)
  //       ? mealData.map((meal, index) => {
  //           countryNames.push(meal.strArea);
  //           return countryNames;
  //         })
  //       : "No Data Available";
  //   } else {
  //     console.log("no country");
  //   }
  //   const uniqueCountryNames = [...new Set(countryNames)];
  //   return uniqueCountryNames;
  // };

  // const toggleDropdown = () => {
  //   setShowDropdown(!showDropdown);
  // };
  // const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
  //   if (event.currentTarget === event.target) {
  //     setShowDropdown(false);
  //   }
  // };
  // const countrySelection = (country: string): void => {
  //   setSelectItem(country);
  //   let filteredMeals =
  //     mealData &&
  //     mealData.filter((meal: { strArea: string }) => {
  //       return meal.strArea === country;
  //     });
  //   setFilteredData(filteredMeals);

  //   console.log("meal data inside country fucntion", mealData);
  //   setShowDropdown(!showDropdown);
  // };

  // const handleSearch = (e: {
  //   target: { value: React.SetStateAction<string> };
  // }) => {
  //   setSearch(e.target.value);
  //   setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  // };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/meals/:id" element={<SingleMeal />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
    // <>
    //   <AppContextProvider value={sampleAppContext}>
    //     <div>
    //       <button
    //         onClick={(): void => toggleDropdown()}
    //         onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
    //           dismissHandler(e)
    //         }
    //       >
    //         <div>{selectItem ? "Select: " + selectItem : "Select..."}</div>
    //         {showDropdown && (
    //           <Dropdown
    //             collection={countries()}
    //             showDropdown={false}
    //             toggleDropdown={(): void => toggleDropdown()}
    //             itemSelection={countrySelection}
    //           />
    //         )}
    //       </button>
    //       <input
    //         type="input"
    //         placeholder="search recipe name"
    //         onChange={(e) => handleSearch(e)}
    //       />
    //       {/* <button onClick={searchRecipe}>Search</button> */}
    //     </div>
    //     {filteredData && filteredData.length > 0 ? (
    //       <RecipeList mealsList={filteredData} />
    //     ) : (
    //       <RecipeList mealsList={mealData} />
    //     )}
    //     <PostInfo />
    //   </AppContextProvider>
    // </>
  );
};

export default App;
