import React from "react";
// import { useFetch, MealApiResponse } from "../../Hooks/useFetch";
const RecipeList = () => {
  // const data: MealApiResponse = useFetch(
  //   "https://www.themealdb.com/api/json/v1/1/search.php?s="
  // );
  // const { data, loading, error } = useFetch(
  //   "https://www.themealdb.com/api/json/v1/1/search.php?s="
  // );
  // console.log("recipeList", data.hasOwnProperty("meals"));
  // if (loading) return <h1>Loading...</h1>;
  // if (error) console.log(error);
  // // if (data.hasOwnProperty("meals") ? data.meals : "not found");
  // console.log(data.meals);
  // if (!data.loading) console.log(data);
  return (
    <div>
      RecipeList
      {/* <h1>{data ? data.strMeal : "not found"}</h1> */}
      {/* {data.meals && data.meals.map((index, value) => index.value)}; */}
    </div>
  );
};

export default RecipeList;
