import React from "react";
import { useState, useEffect } from "react";
import { IMealApiResponse } from "../Interface/Interface";

export const useFetch = (url: string) => {
  const [apiData, setApiData] = useState<IMealApiResponse>();
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
      setApiData(json.meals);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return { apiData: apiData, error: error, loading: loading };
};
