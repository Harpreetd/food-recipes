import React from "react";
import { useState, useEffect } from "react";
import { IDropdownProps } from "../../Interface/Interface";

const Dropdown: React.FC<IDropdownProps> = ({
  optionArea,
  optionSelection,
}: IDropdownProps): JSX.Element => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const onClickHandler = (item: string): void => {
    if (optionSelection) optionSelection(item);
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
                return <div key={index}>{item.strArea}</div>;
              })
            : "Not Found"}
        </div>
        {/* {Array.isArray(options)
          ? options.map((item: string): JSX.Element => {
              return (
                <p
                  key={item}
                  onClick={(): void => {
                    onClickHandler(item);
                  }}
                >
                  {item}
                </p>
              );
            })
          : "No countried Found"} */}
      </div>
    </>
  );
};

export default Dropdown;
