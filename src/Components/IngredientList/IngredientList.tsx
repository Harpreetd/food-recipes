import React from "react";

const IngredientList = ({ props }: any) => {
  return (
    <div>
      {Array.isArray(props) ? (
        props.map((item: string, index: number) => <p key={index}>{item}</p>)
      ) : (
        <p>"empty"</p>
      )}
    </div>
  );
};

export default IngredientList;
