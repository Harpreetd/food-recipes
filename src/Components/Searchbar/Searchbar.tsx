import React, { useEffect } from "react";
import { useGlobalContext } from "../../Context/AppContext";
const Searchbar = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef<HTMLInputElement>(null);
  // console.log(setSearchTerm);
  useEffect(() => {
    searchValue.current?.focus();
  }, []);
  const searchMeal = () => {
    if (setSearchTerm) setSearchTerm(searchValue.current?.value);
  };
  const handleSubmit = (e: Event) => {
    e.preventDefault();
  };
  return (
    <section>
      <form onSubmit={() => handleSubmit}>
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
