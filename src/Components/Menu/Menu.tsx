import { Box, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import { useGlobalContext } from "../../Context/AppContext";
import Dropdown from "../FilterButtons/Dropdown";

const Menu: React.FC = (): JSX.Element => {
  // const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectOption, setSelectOption] = useState<string>("");
  const { country, category, ingredient, setUrl, setSearchTerm } =
    useGlobalContext();
  const countryList: any = country && country.map((item) => item.strArea);
  // console.log(countryList);
  const categoryList: any =
    category && category.map((item) => item.strCategory);
  // console.log(categoryList);
  const ingredientList: any =
    ingredient && ingredient.map((item) => item.strIngredient);
  // console.log(ingredientList);
  // toggle the dropdown
  // const toggleDropdown = () => {
  //   setShowDropdown(!showDropdown);
  // };

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
    // <Box alignItems="center" justifyContent="center">
    <Container maxWidth="lg">
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={2} sm={4} md={4}>
          <Dropdown
            dropdownName="Cuisine"
            options={countryList}
            showDropdown={false}
            optionSelection={countrySelection}
          />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Dropdown
            dropdownName="Category"
            options={categoryList}
            showDropdown={false}
            optionSelection={categorySelection}
          />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Dropdown
            dropdownName="Ingredient"
            options={ingredientList}
            showDropdown={false}
            optionSelection={ingredientSelection}
          />
        </Grid>
      </Grid>
    </Container>
    // </Box>
  );
};

export default Menu;
