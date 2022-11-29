import { Container, Grid } from "@mui/material";
import React, { FC } from "react";
import { useParams } from "react-router-dom";
import IngredientList from "../Components/IngredientList/IngredientList";
import { useGlobalContext } from "../Context/AppContext";
import { IMeals } from "../Interface/Interface";

const SingleMeal: FC = () => {
  const { meals } = useGlobalContext();

  const { id } = useParams<string>();

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
                  <>
                    <Grid item xs={2} sm={4} md={4} key={index}>
                      <img
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                        className="img-large"
                      />
                    </Grid>
                    <Grid item>
                      <h3>{meal.strMeal}</h3>
                    </Grid>
                    <Grid item>
                      <h3>{meal.strArea}</h3>
                    </Grid>
                    <Grid item>
                      <p>{meal.strInstructions}</p>
                    </Grid>
                    <Grid item>
                      <IngredientList strIngredients={meal.strIngredients} />
                    </Grid>
                  </>
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
