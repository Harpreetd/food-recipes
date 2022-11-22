import React from "react";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import TextField from "@mui/material/TextField";
// import useFetch from "./Hooks/useFetch";
import "./App.css";
import RecipeList from "./Components/RecipeList/RecipeList";
import { useFetch, MealApiResponse } from "./Hooks/useFetch";

function App() {
  const data: MealApiResponse = useFetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  // const { data, loading, error } = useFetch(
  //   "https://www.themealdb.com/api/json/v1/1/search.php?s="
  // );

  // if (error) {
  //   console.log(error);
  // }
  if (!data.loading) console.log(data);
  return (
    <>
      {/* {loading && <div>Loading...</div>} */}
      <RecipeList />
    </>
  );
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
