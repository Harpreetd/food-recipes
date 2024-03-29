import React from "react";
import { IDropdownProps } from "../../Interface/Interface";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const Dropdown: React.FC<IDropdownProps> = ({
  options,
  optionSelection,
  dropdownName,
}: IDropdownProps): JSX.Element => {
  const onChangeHandler = (event: SelectChangeEvent<string>): void => {
    if (optionSelection) optionSelection(event.target.value);
  };
  return (
    <FormControl fullWidth={true}>
      <InputLabel htmlFor="custom-select">{dropdownName}</InputLabel>
      <Select
        defaultValue=""
        labelId="custom-select-label"
        id="custom-select"
        onChange={onChangeHandler}
        placeholder="cuisine"
        sx={{ border: "none" }}
      >
        {Array.isArray(options)
          ? options.map((item, index) => {
              return (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              );
            })
          : "No data available"}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
