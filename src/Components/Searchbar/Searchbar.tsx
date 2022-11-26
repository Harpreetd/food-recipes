import React from "react";
import { useGlobalContext } from "../../Context/AppContext";
const Searchbar = () => {
  const { setSearchTerm } = useGlobalContext();
  // console.log(setSearchTerm);
  return <div>Searchbar</div>;
};

export default Searchbar;
