import React, { FC } from "react";
import { useGlobalContext } from "../../Context/AppContext";
import Dropdown from "../Dropdown/Dropdown";
import { Container, Grid } from "@mui/material";

const Menu: FC = (): JSX.Element => {
  const { country, category, ingredient, setUrl, setSearchTerm } =
    useGlobalContext();
  const countryList: any = country && country.map((item) => item.strArea);

  const categoryList: any =
    category && category.map((item) => item.strCategory);

  const ingredientList: any =
    ingredient && ingredient.map((item) => item.strIngredient);

  const countrySelection = (option: string): void => {
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
            optionSelection={countrySelection}
          />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Dropdown
            dropdownName="Filter by Category"
            options={categoryList}
            optionSelection={categorySelection}
          />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Dropdown
            dropdownName="Filter by Ingredient"
            options={ingredientList}
            optionSelection={ingredientSelection}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Menu;
