import React from "react";
import { useGlobalContext } from "../../Context/AppContext";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "red",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(0)})`,
  },
}));
const Searchbar = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef<HTMLInputElement>(null);
  const searchMeal = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (setSearchTerm) setSearchTerm(event.target.value);
  };
  return (
    <div className="searchbar">
      <div className="searchbarIcon-wrapper">
        <SearchIcon />
      </div>
      <StyledInputBase
        placeholder="Search…"
        id="mealName"
        ref={searchValue}
        onChange={searchMeal}
      />
    </div>
  );
};

export default Searchbar;
