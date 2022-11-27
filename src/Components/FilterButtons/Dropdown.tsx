import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { useGlobalContext } from "../../Context/AppContext";
import { IDropdownProps } from "../../Interface/Interface";

const Dropdown: React.FC<IDropdownProps> = ({
  options,
  optionSelection,
}: IDropdownProps): JSX.Element => {
  // const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const { searchTerm, setSearchTerm } = useGlobalContext();
  // useEffect(() => {
  //   setShowDropdown(showDropdown);
  // }, [showDropdown]);
  const onClickHandler = (selectedOption: any): void => {
    if (optionSelection) optionSelection(selectedOption);
  };
  return (
    <>
      {/* {Array.isArray(options)
        ? options.map((item, index) => {
            return ( */}

      <Select
        // defaultValue=""
        value={searchTerm}
        labelId="custom-select-label"
        id="custom-select"
        onChange={() => {}}
      >
        {Array.isArray(options)
          ? options.map((item, index) => {
              console.log(item);
              return (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              );
            })
          : "No data available"}
      </Select>
      {/* <p
                  key={index}
                  onClick={(): void => {
                    onClickHandler(item);
                  }}
                >
                  {item}
                </p> */}

      {/* ); */}
      {/* }) */}
      {/* : "Not Found"} */}
    </>
  );
};

export default Dropdown;
