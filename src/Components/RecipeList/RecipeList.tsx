import React, { FC } from "react";
import { IMeals } from "../../Interface/Interface";

import RecipeCard from "../RecipeCard/RecipeCard";
import { useGlobalContext } from "../../Context/AppContext";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Loading from "../Loading/Loading";
import NoResult from "../NoResult/NoResult";

const RecipeList: FC = () => {
  const { meals, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (meals && meals.length < 1) {
    return <NoResult />;
  }
  return (
    <Container maxWidth="lg" sx={{ paddingTop: 7 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 5 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.isArray(meals) &&
          meals.map((meal: IMeals, index: number) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <RecipeCard key={index} {...meal} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default RecipeList;
