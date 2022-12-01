import { Container, Grid, Stack } from "@mui/material";
import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import IngredientList from "../Components/IngredientList/IngredientList";
import { useGlobalContext } from "../Context/AppContext";
import { IMeals } from "../Interface/Interface";

const newUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
const SingleMeal: FC = () => {
  const { meals, setUrl, setSearchTerm } = useGlobalContext();

  const { id } = useParams<string>();
  useEffect(() => {
    if (setUrl) setUrl(newUrl);
    if (setSearchTerm) setSearchTerm(`${id}`);
  });

  return (
    <Container maxWidth="xl" sx={{ paddingTop: 9 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.isArray(meals)
          ? meals.map((meal: IMeals, index: number) => {
              if (meal.idMeal === id) {
                return (
                  <Container
                    maxWidth={false}
                    sx={{ paddingTop: 5 }}
                    key={index}
                  >
                    <Grid
                      container
                      spacing={{ xs: 2, md: 5 }}
                      columns={{ xs: 4, sm: 8, md: 10 }}
                    >
                      <Grid item xs={2} sm={4} md={4}>
                        <img
                          src={meal.strMealThumb}
                          alt={meal.strMeal}
                          className="img-large"
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <h1>
                          {meal.strMeal} ({meal.strArea})
                        </h1>
                      </Grid>
                      <Grid></Grid>
                      <Grid item sx={{ paddingLeft: 6 }}>
                        <h4>Ingredients:</h4>
                        <IngredientList props={meal.strIngredients} />
                      </Grid>
                      <Grid item>
                        <h4>Measures:</h4>
                        <IngredientList props={meal.strMeasures} />
                      </Grid>
                      <Grid item>
                        <h4>Method: </h4>
                        <p>{meal.strInstructions}</p>
                      </Grid>
                      <Grid item></Grid>
                    </Grid>
                  </Container>
                );
              }
              return null;
            })
          : "No Data Available"}
      </Grid>
    </Container>
  );
};

export default SingleMeal;
