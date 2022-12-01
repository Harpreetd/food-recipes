import { Box, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import { useGlobalContext } from "../../Context/AppContext";
import Dropdown from "../Dropdown/Dropdown";

const Menu: React.FC = (): JSX.Element => {
  const [selectOption, setSelectOption] = useState<string>("");
  // const [countrySelected, setCountrySelected] = useState<boolean>(false);
  // const [categorySelected, setCategorySelected] = useState<boolean>(false);
  // const [ingredientSelected, setIngredientSelected] = useState<boolean>(false);

  const { country, category, ingredient, setUrl, setSearchTerm } =
    useGlobalContext();
  const countryList: any = country && country.map((item) => item.strArea);

  const categoryList: any =
    category && category.map((item) => item.strCategory);

  const ingredientList: any =
    ingredient && ingredient.map((item) => item.strIngredient);

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
    <Container maxWidth="lg" sx={{ marginTop: 5 }}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={2} sm={4} md={4}>
          <Dropdown
            dropdownName="Filter by Cuisine"
            options={countryList}
            showDropdown={false}
            optionSelection={countrySelection}
          />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Dropdown
            dropdownName="Filter by Category"
            options={categoryList}
            showDropdown={false}
            optionSelection={categorySelection}
          />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Dropdown
            dropdownName="Filter by Ingredient"
            options={ingredientList}
            showDropdown={false}
            optionSelection={ingredientSelection}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Menu;
