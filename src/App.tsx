import React from "react";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import TextField from "@mui/material/TextField";
import useFetch from "./Hooks/useFetch";
import "./App.css";

function App() {
  const { loading, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );

  if (error) {
    console.log(error);
  }

  return <>{loading && <div>Loading...</div>}</>;
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
