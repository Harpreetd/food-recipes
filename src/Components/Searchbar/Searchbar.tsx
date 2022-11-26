import React from "react";
import { useGlobalContext } from "../../Context/AppContext";
const Searchbar = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef<HTMLInputElement>(null);
  // console.log(setSearchTerm);
  const searchMeal = () => {
    if (setSearchTerm) setSearchTerm(searchValue.current?.value);
  };
  return (
    <section>
      <form>
        <div>
          <label htmlFor="mealName">Search recipe name</label>
          <input
            type="text"
            id="mealName"
            ref={searchValue}
            onChange={searchMeal}
          />
        </div>
      </form>
    </section>
  );
};

export default Searchbar;
