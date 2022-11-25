import React from "react";
import { useState, useEffect } from "react";
import { IDropdownProps } from "../../Interface/Interface";

const Dropdown: React.FC<IDropdownProps> = ({
  collection,
  itemSelection,
}: IDropdownProps): JSX.Element => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const onClickHandler = (item: string): void => {
    itemSelection(item);
  };
  useEffect(() => {
    setShowDropdown(showDropdown);
    console.log(collection); // undefined
  }, [showDropdown]);
  return (
    <>
      <div>
        {collection &&
          collection.map((item: string, index: number): JSX.Element => {
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
