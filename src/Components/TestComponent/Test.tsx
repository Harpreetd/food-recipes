import React from "react";
export interface ITest {
  resIngredient: any;
  resCountry: any;
  resCategory: any;
}
const Test = ({ resIngredient, resCountry, resCategory }: ITest) => {
  console.log("from Test", resIngredient, resCountry, resCategory);
  return <div>Test</div>;
};

export default Test;
