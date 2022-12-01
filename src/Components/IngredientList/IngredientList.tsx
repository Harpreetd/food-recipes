import React from "react";

const IngredientList = ({ props }: any) => {
  return (
    <div>
      {Array.isArray(props) ? (
        props.map((item: string, index: number) => <p key={index}>{item}</p>)
      ) : (
        <p>"empty"</p>
      )}
      {/* {Array.isArray(strMeasures) ? (
        strMeasures.map((strMeasure: string, index: number) => (
          <p key={index}>{strMeasure}</p>
        ))
      ) : (
        <p>"empty"</p>
      )} */}
    </div>
  );
};

export default IngredientList;
