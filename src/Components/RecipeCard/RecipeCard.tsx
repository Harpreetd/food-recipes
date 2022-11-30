import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Rating,
  styled,
  Typography,
} from "@mui/material";

import { red } from "@mui/material/colors";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { Link } from "react-router-dom";
import { ExpandMoreProps, IMeals } from "../../Interface/Interface";

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const RecipeCard = ({
  idMeal,
  strMeal,
  strCategory,
  strMealThumb,
  strArea,
  strInstructions,
}: IMeals) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
          <h4>Category : {strCategory}</h4>
          {strInstructions.substring(0, 100)}
          <Link to={`/meals/${idMeal}`}>...Read more</Link>
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
