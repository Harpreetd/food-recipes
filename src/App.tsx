import React from "react";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
// import useFetch from "./Hooks/useFetch";
import "./App.css";
import RecipeList from "./Components/RecipeList/RecipeList";
import { useFetch, MealApiResponse } from "./Hooks/useFetch";

interface Meal {
  [index: number]: {
    strArea: string;
    strCategory: string;
    strInstructions: string;
    strMeal: string;
    strMealThumb: string;
    strSource: string;
    strTags: string;
    strYoutube: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
  };
}

function App() {
  const [data, dataSet] = useState<Meal>({} as Meal);
  const testData: MealApiResponse = useFetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
  );

  // const { data, loading, error } = useFetch(
  //   "https://www.themealdb.com/api/json/v1/1/search.php?s="
  // );

  // if (error) {
  //   console.log(error);
  // }
  // if (!data.loading) console.log(data.data);
  useEffect(() => {
    if (testData) {
      dataSet(testData.data as Meal);
    }
  }, [testData]);
  console.log(data);
  return (
    <div>
      {data && (
        <div>
          {data[0].strArea} was released in {data[0].strMeal}
        </div>
      )}
    </div>
  );
  // return (
  //   <>
  //     {/* {loading && <div>Loading...</div>} */}
  //     <RecipeList />
  //   </>
  // );
  // {data && <div>{data.map(item => <div>{item}</div>)}</div>}

  // return (
  //   <div className="App">
  //     <h2>Get the Recipes here</h2>
  //     <TextField variant="outlined" color="secondary" type="date" />
  //     <Button startIcon={<SaveIcon />} variant="contained" color="secondary">
  //       Click me
  //     </Button>
  //   </div>
  // );
}

export default App;
