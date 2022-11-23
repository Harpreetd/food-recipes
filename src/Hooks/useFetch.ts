import React from "react";
import { useState, useEffect } from "react";
import { MealApiResponse } from "../Interface/Interface";


export const useFetch = (url: string) => {
  const [apiData, setApiData] = useState<MealApiResponse>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getApiData();
  }, [url]);

  const getApiData = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch(url);
      const json = await apiResponse.json();
      console.log(json.meals);
      setApiData(json.meals);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return { apiData: apiData };
};

// import React from "react";
// import { useState, useEffect } from "react";

// export type MealApiResponse = {
//   data: any;
//   error: any;
//   loading: boolean;
// };

// export const useFetch = (url: string): MealApiResponse => {
//   const [data, setData] = useState<any>();
//   const [error, setError] = useState<any>();
//   const [loading, setLoading] = useState<boolean>(false);

//   const getApiData = async () => {
//     setLoading(true);
//     try {
//       const apiResponse = await fetch(url);
//       const json = await apiResponse.json();
//       console.log(json.meals);
//       setData(json.meals);
//     } catch (error) {
//       setError(error);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     getApiData();
//   }, [url]);
//   return { data, error, loading };
// };
// export default useFetch;
