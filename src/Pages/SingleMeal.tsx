import { Container, Grid, Stack, Typography } from "@mui/material";
import React, { FC, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import IngredientList from "../Components/IngredientList/IngredientList";
import { useGlobalContext } from "../Context/AppContext";
import { IMeals } from "../Interface/Interface";
import ReplyIcon from "@mui/icons-material/Reply";
let vedioId: string | undefined;

const newUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
const SingleMeal: FC = () => {
  const { meals, url, setUrl, setSearchTerm } = useGlobalContext();

  const { id } = useParams<string>();

  useEffect(() => {
    if (setUrl) setUrl(newUrl);
    if (setSearchTerm) setSearchTerm(`${id}`);
  }, [setSearchTerm, setUrl]);

  return (
    <Container maxWidth={false} sx={{ paddingTop: 9 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        alignItems="center"
        justifyContent="center"
      >
        {Array.isArray(meals)
          ? meals.map((meal: IMeals, index: number) => {
              if (meal.idMeal === id) {
                if (meal.strYoutube) {
                  const youtubeUrl = meal.strYoutube;
                  const splitUrl = youtubeUrl.split("=");
                  vedioId = splitUrl[splitUrl.length - 1];
                }

                return (
                  <Container maxWidth={false} sx={{ padding: 5 }} key={index}>
                    <Grid
                      container
                      spacing={{ xs: 2, md: 10 }}
                      columns={{ xs: 4, sm: 8, md: 10 }}
                    >
                      <Grid item xs={2} sm={3} md={4}>
                        <img
                          src={meal.strMealThumb}
                          alt={meal.strMeal}
                          className="img-large"
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <a href="/" className="links">
                          Home
                          <ReplyIcon />
                        </a>
                        <h1>
                          {meal.strMeal} ({meal.strArea})
                        </h1>
                        <p>{meal.strCategory}</p>
                      </Grid>

                      <Grid item sx={{ paddingLeft: 6 }}>
                        <h4>Ingredients:</h4>
                        <IngredientList props={meal.strIngredients} />
                      </Grid>
                      <Grid item>
                        <h4>Measures:</h4>
                        <IngredientList props={meal.strMeasures} />
                      </Grid>
                    </Grid>
                    <Grid item sx={{ padding: 20, paddingTop: 5 }}>
                      <h4>Method: </h4>
                      <p>{meal.strInstructions}</p>
                      <Grid item>
                        <a href={`${meal.strYoutube}`} target="_blank">
                          {meal.strYoutube}
                        </a>
                      </Grid>
                    </Grid>
                    <Grid item>
                      {vedioId !== undefined && (
                        <iframe
                          src={`https://www.youtube.com/embed/${vedioId}`}
                          title={`${meal.strMeal}`}
                        ></iframe>
                      )}
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
