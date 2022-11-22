import React from "react";
import { useState, useEffect } from "react";

export type MealApiResponse = {
  status: number;
  statusText: string;
  data: any;
  error: any;
  loading: boolean;
};

export const useFetch = (url: string): MealApiResponse => {
  const [status, setStatus] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>("");
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const getApiData = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch(url);

      const json = await apiResponse.json();
      console.log(apiResponse, json);
      setData(json);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getApiData();
  }, [url]);
  return { status, statusText, data, error, loading };
};
// export default useFetch;
