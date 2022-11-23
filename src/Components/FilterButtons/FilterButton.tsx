import React from "react";
import { useState, useEffect } from "react";
type DropdownProps = {
  countries: string[];
  showDropdown: boolean;
  toggleDropdown: Function;
  countrySelection: Function;
};

const Dropdown: React.FC<DropdownProps> = ({
  countries,
  countrySelection,
}: DropdownProps): JSX.Element => {
  const [showDropdown, setShowDropdown] = useState<boolean>(true);
  const onClickHandler = (country: string): void => {
    countrySelection(country);
  };
  useEffect(() => {
    setShowDropdown(showDropdown);
  }, [showDropdown]);
  return (
    <>
      <div>
        {countries.map((country: string, index: number): JSX.Element => {
          return (
            <p
              key={index}
              onClick={(): void => {
                onClickHandler(country);
              }}
            >
              {country}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default Dropdown;
