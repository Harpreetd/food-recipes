import React from "react";
import { IMeals, IRecipeListProps } from "../../Interface/Interface";
// import { MealApiResponse } from "../../Interface/Interface";
import RecipeCard from "../RecipeCard/RecipeCard";
import { useGlobalContext } from "../../Context/AppContext";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
// import { Interface } from "readline";

const RecipeList = () => {
  const { meals, loading } = useGlobalContext();
  if (loading) {
    return <h2>"laoding..."</h2>;
  }
  if (meals && meals.length < 1) {
    return <h2>"no meals"</h2>;
  }
  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.isArray(meals)
          ? meals.map((meal: IMeals, index: number) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <RecipeCard key={index} {...meal} />
              </Grid>
            ))
          : "No Data Available"}
      </Grid>
    </Container>
  );
};

export default RecipeList;
