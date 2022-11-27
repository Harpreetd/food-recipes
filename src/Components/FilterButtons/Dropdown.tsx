import React from "react";
import { useState, useEffect } from "react";
import { IDropdownProps } from "../../Interface/Interface";

const Dropdown: React.FC<IDropdownProps> = ({
  optionArea,
  optionSelection,
}: IDropdownProps): JSX.Element => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const onClickHandler = (index: number): void => {
    if (optionSelection) optionSelection(index);
  };
  useEffect(() => {
    setShowDropdown(showDropdown);
    console.log("dropdown options", optionArea); // undefined
  }, [showDropdown]);
  return (
    <>
      <div>
        <h2>Dropdown caountries</h2>
        <div>
          {Array.isArray(optionArea)
            ? optionArea.map((item, index) => {
                return (
                  <p
                    key={index}
                    onClick={(): void => {
                      onClickHandler(index);
                    }}
                  >
                    {item.strArea}
                  </p>
                );
              })
            : "Not Found"}
        </div>
      </div>
    </>
  );
};

export default Dropdown;
