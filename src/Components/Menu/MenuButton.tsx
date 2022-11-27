import React from "react";

const MenuButton = (props: any) => {
  const { toggleDropdown, dismissHandler } = props;
  return (
    <>
      <button
        onClick={(): void => toggleDropdown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void => {
          dismissHandler(e);
        }}
      >
        Select Country
      </button>
    </>
  );
};

export default MenuButton;
