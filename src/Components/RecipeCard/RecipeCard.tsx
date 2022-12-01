import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";

import { red } from "@mui/material/colors";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { Link } from "react-router-dom";
import { IMeals } from "../../Interface/Interface";

const RecipeCard = ({
  idMeal,
  strMeal,
  strCategory,
  strMealThumb,
  strArea,
}: IMeals) => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <RestaurantIcon />
          </Avatar>
        }
        title={strMeal}
        subheader={strArea}
      />
      <CardMedia
        component="img"
        height="200"
        image={strMealThumb}
        alt={strMeal}
      />
      <CardContent>
        <Typography component={"div"} color="text.secondary">
          <h4> {strCategory}</h4>

          <Link to={`/meals/${idMeal}`} className="links">
            {"Get full Recipe..."}
          </Link>
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        {idMeal.includes("52") ? (
          <Rating name="read-only" value={3} readOnly />
        ) : (
          <Rating name="read-only" value={4} readOnly />
        )}
      </CardActions>
    </Card>
  );
};

export default RecipeCard;
