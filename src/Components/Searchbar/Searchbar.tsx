import React from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";

import { useGlobalContext } from "../../Context/AppContext";
// import { Search } from "react-router-dom";
const Search = styled("div")(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.5),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.8),
  },

  width: "50%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  color: "red",
  padding: theme.spacing(0, 2),
  height: "5%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "red",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    // transition: theme.transitions.create("width"),
  },
}));
const Searchbar = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef<HTMLInputElement>(null);
  const searchMeal = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (setSearchTerm) setSearchTerm(event.target.value);
  };
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        id="mealName"
        ref={searchValue}
        onChange={searchMeal}
      />
      {/* <Input
        type="search"
        id="mealName"
        ref={searchValue}
        onChange={searchMeal}
      ></Input> */}
    </Search>
    // <section>
    //   <FormControl
    //     variant="outlined"
    //     sx={{ width: 400 }}
    //     onSubmit={() => handleSubmit}
    //   >
    //     <InputLabel htmlFor="mealName">Search Recipe Name</InputLabel>
    //     <Input
    //       type="search"
    //       id="mealName"
    //       ref={searchValue}
    //       onChange={searchMeal}
    //     ></Input>
    //   </FormControl>
    // </section>
  );
};

export default Searchbar;
