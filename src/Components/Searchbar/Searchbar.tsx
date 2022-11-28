import React from "react";
import { FormControl, Input, InputLabel } from "@mui/material";

import { useGlobalContext } from "../../Context/AppContext";
const Searchbar = () => {
  const { setSearchTerm, meals } = useGlobalContext();
  const searchValue = React.useRef<HTMLInputElement>(null);
  const searchMeal = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (setSearchTerm) setSearchTerm(event.target.value);
  };
  const handleSubmit = (e: Event) => {
    e.preventDefault();
  };
  return (
    <section>
      <FormControl
        variant="outlined"
        sx={{ width: 400 }}
        onSubmit={() => handleSubmit}
      >
        <InputLabel htmlFor="mealName">Search Recipe Name</InputLabel>
        <Input
          type="search"
          id="mealName"
          ref={searchValue}
          onChange={searchMeal}
        ></Input>
      </FormControl>
    </section>
  );
};

export default Searchbar;
