import React from "react";
import { useState, useEffect } from "react";
import { IDropdownProps } from "../../Interface/Interface";

const Dropdown: React.FC<IDropdownProps> = ({
  options,
  optionSelection,
}: IDropdownProps): JSX.Element => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const onClickHandler = (item: string): void => {
    if (optionSelection) optionSelection(item);
  };
  useEffect(() => {
    setShowDropdown(showDropdown);
    console.log(options); // undefined
  }, [showDropdown]);
  return (
    <>
      <div>
        {options &&
          options.map((item: string, index: number): JSX.Element => {
            return (
              <p
                key={index}
                onClick={(): void => {
                  onClickHandler(item);
                }}
              >
                {item}
              </p>
            );
          })}
      </div>
    </>
  );
};

export default Dropdown;
