import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url: string) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        console.log(response.data);
        setData(response.data.meals);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);
  console.log(data);
  return { data, error, loading };
};
export default useFetch;
