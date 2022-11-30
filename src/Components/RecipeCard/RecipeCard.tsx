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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { Link } from "react-router-dom";
import { ExpandMoreProps, IMeals } from "../../Interface/Interface";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IngredientList from "../IngredientList/IngredientList";

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

  strIngredients,
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
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={strMeal}
        subheader={strCategory}
      />
      <CardMedia
        component="img"
        height="200"
        image={strMealThumb}
        alt={strMeal}
      />
      <CardContent>
        <Typography component={"div"} color="text.secondary">
          {strArea}
          <IngredientList strIngredients={strIngredients} />

          <Link to={`/meals/${idMeal}`}>Details</Link>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {idMeal.includes("52") ? (
          <Rating name="read-only" value={3} readOnly />
        ) : (
          <Rating name="read-only" value={4} readOnly />
        )}

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>{strInstructions}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default RecipeCard;
