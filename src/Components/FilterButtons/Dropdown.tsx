import React from "react";
import { useState, useEffect } from "react";
import { useGlobalContext } from "../../Context/AppContext";
import { IDropdownProps } from "../../Interface/Interface";

const Dropdown: React.FC<IDropdownProps> = ({
  options,
  optionSelection,
}: IDropdownProps): JSX.Element => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  console.log(options);
  const optionKey = options && Object.keys(options[0]);
  console.log(optionKey);

  useEffect(() => {
    setShowDropdown(showDropdown);
    return console.log(optionKey);
  }, [showDropdown]);
  const onClickHandler = (selectedOption: any): void => {
    if (optionSelection) optionSelection(selectedOption);
  };
  return (
    <>
      {Array.isArray(options)
        ? options.map((item, index) => {
            return (
              <p
                key={index}
                onClick={(): void => {
                  onClickHandler(item.strCategory);
                }}
              >
                {item.strCategory}
              </p>
            );
          })
        : "Not Found"}
    </>
  );
};

export default Dropdown;
