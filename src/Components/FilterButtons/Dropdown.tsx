import React from "react";
import { useState, useEffect } from "react";
import { IDropdownProps } from "../../Interface/Interface";

const Dropdown: React.FC<IDropdownProps> = ({
  optionArea,
  optionSelection,
}: IDropdownProps): JSX.Element => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const onClickHandler = (item: any): void => {
    if (optionSelection) optionSelection(item);
  };
  useEffect(() => {
    setShowDropdown(showDropdown);
    console.log("dropdown options", optionArea); // undefined
  }, [showDropdown]);
  return (
    <>
      {Array.isArray(optionArea)
        ? optionArea.map((item, index) => {
            return (
              <p
                key={index}
                onClick={(): void => {
                  onClickHandler(item.strArea);
                }}
              >
                {item.strArea}
              </p>
            );
          })
        : "Not Found"}
    </>
  );
};

export default Dropdown;
