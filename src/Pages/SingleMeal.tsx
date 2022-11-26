import React, { FC } from "react";
import { useParams, Link } from "react-router-dom";
const url = "www.themealdb.com/api/json/v1/1/lookup.php?i";
const SingleMeal: FC = () => {
  const { id } = useParams<string>();
  console.log(id);
  return <div>SingleMeal</div>;
};

export default SingleMeal;
