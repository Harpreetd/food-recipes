import React from "react";
import { FormControl, Input, InputLabel } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";

import { useGlobalContext } from "../../Context/AppContext";
// import { Search } from "react-router-dom";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const Searchbar = () => {
  const { setSearchTerm, meals } = useGlobalContext();
  const searchValue = React.useRef<HTMLInputElement>(null);
  const searchMeal = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (setSearchTerm) setSearchTerm(event.target.value);
  };
  // const handleSubmit = (e: Event) => {
  //   e.preventDefault();
  // };
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
