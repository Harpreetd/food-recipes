import { MedicalServices } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../Context/AppContext";
import Dropdown from "../FilterButtons/Dropdown";

const Menu: React.FC = (): JSX.Element => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectOption, setSelectOption] = useState<string>("");
  const { country } = useGlobalContext();

  // toggle the dropdown
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  // hide the dropdown menu if clicked outside of dropdown-menu
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>) => {
    if (event.currentTarget === event.target) {
      setShowDropdown(false);
    }
  };

  // callback function to consume the country name from the child component
  const optionSelection = (option: string): void => {
    setSelectOption(option);
  };
  return (
    <>
      <div>
        {selectOption ? `You selected ${selectOption}` : "Select an option..."}
      </div>
      <button
        onClick={(): void => toggleDropdown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void => {
          dismissHandler(e);
        }}
      >
        <div>{selectOption ? "Select:" + selectOption : "select..."}</div>
        {showDropdown && (
          <Dropdown
            optionArea={country}
            showDropdown={false}
            toggleDropdown={(): void => toggleDropdown()}
            optionSelection={optionSelection}
          />
        )}
      </button>
    </>
  );
};

export default Menu;
