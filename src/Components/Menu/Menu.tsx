import { MedicalServices } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../Context/AppContext";
import Dropdown from "../FilterButtons/Dropdown";

const Menu: React.FC = (): JSX.Element => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectOption, setSelectOption] = useState<string>("");
  const { country, category, ingredient, setUrl, setSearchTerm } =
    useGlobalContext();
  const countryList: any = country && country.map((item) => item.strArea);
  console.log(countryList);
  const categoryList: any =
    category && category.map((item) => item.strCategory);
  console.log(categoryList);
  const ingredientList: any =
    ingredient && ingredient.map((item) => item.strIngredient);
  console.log(ingredientList);
  // toggle the dropdown
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  // hide the dropdown menu if clicked outside of dropdown-menu
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>) => {
    if (event.currentTarget === event.target) {
      setShowDropdown(false);
    }
  };

  // callback function to consume the country name from the child component
  const countrySelection = (option: string): void => {
    setSelectOption(option);
    if (setUrl) setUrl(`https://www.themealdb.com/api/json/v1/1/filter.php?a=`);
    if (setSearchTerm) setSearchTerm(option);
  };
  const categorySelection = (option: string): void => {
    if (setUrl) setUrl(`https://www.themealdb.com/api/json/v1/1/filter.php?c=`);
    if (setSearchTerm) setSearchTerm(option);
  };
  const ingredientSelection = (option: string): void => {
    if (setUrl) setUrl(`https://www.themealdb.com/api/json/v1/1/filter.php?i=`);
    if (setSearchTerm) setSearchTerm(option);
  };
  return (
    <>
      <div>
        {selectOption ? `You selected ${selectOption}` : "Select an option..."}
      </div>
      <Dropdown
        id="countryDropdown"
        options={countryList}
        showDropdown={false}
        toggleDropdown={(): void => toggleDropdown()}
        optionSelection={countrySelection}
      />
      <Button
        onClick={(): void => toggleDropdown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void => {
          dismissHandler(e);
        }}
      >
        <div>
          {selectOption ? "Country Selected" + selectOption : "select country"}
        </div>
        {showDropdown && (
          <>
            <Dropdown
              id="countryDropdown"
              options={countryList}
              showDropdown={false}
              toggleDropdown={(): void => toggleDropdown()}
              optionSelection={countrySelection}
            />
          </>
        )}
      </Button>
      <Button
        onClick={(): void => toggleDropdown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void => {
          dismissHandler(e);
        }}
      >
        <div>
          {selectOption
            ? "Category Selected:" + selectOption
            : "select category"}
        </div>
        {showDropdown && (
          <>
            <Dropdown
              id="categoryDropdown"
              options={categoryList}
              showDropdown={false}
              toggleDropdown={(): void => toggleDropdown()}
              optionSelection={categorySelection}
            />
          </>
        )}
      </Button>
      <Button
        onClick={(): void => toggleDropdown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void => {
          dismissHandler(e);
        }}
      >
        <div>
          {selectOption
            ? "Ingredient Selected" + selectOption
            : "select Ingredient"}
        </div>
        {showDropdown && (
          <>
            <Dropdown
              id="ingredientDropdown"
              options={ingredientList}
              showDropdown={false}
              toggleDropdown={(): void => toggleDropdown()}
              optionSelection={ingredientSelection}
            />
          </>
        )}
      </Button>
    </>
  );
};

export default Menu;
