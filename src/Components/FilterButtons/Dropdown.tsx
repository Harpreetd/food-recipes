import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { useGlobalContext } from "../../Context/AppContext";
import { IDropdownProps } from "../../Interface/Interface";

const Dropdown: React.FC<IDropdownProps> = ({
  options,
  optionSelection,
  dropdownName,
}: IDropdownProps): JSX.Element => {
  const onChangeHandler = (event: SelectChangeEvent<string>): void => {
    if (optionSelection) optionSelection(event.target.value);
  };
  return (
    <>
      <FormControl variant="outlined" sx={{ minWidth: 345 }}>
        <InputLabel htmlFor="custom-select">{dropdownName}</InputLabel>
        <Select
          defaultValue=""
          labelId="custom-select-label"
          id="custom-select"
          onChange={onChangeHandler}
          placeholder="cuisine"
        >
          {Array.isArray(options)
            ? options.map((item, index) => {
                // console.log(item);
                return (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                );
              })
            : "No data available"}
        </Select>
      </FormControl>
    </>
  );
};

export default Dropdown;
