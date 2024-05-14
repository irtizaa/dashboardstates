import { React, useEffect, useState } from "react";
import apiClient from "../utils/api_client";

const useData = (endpoint, customConfig, deps) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isLodaing, setIsLodaing] = useState(false);

  useEffect(
    () => {
      setIsLodaing(true);

      apiClient.get(endpoint, customConfig).then((res) => {
        setData(res.data);
        setIsLodaing(false).catch((err) => {
          setError(err.message);
          setIsLodaing(false);
        });
      });
    },
    deps ? deps : []
  );
  return { data, error, isLodaing };
};

export default useData;
