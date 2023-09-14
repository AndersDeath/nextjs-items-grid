"use client";
import { useState, useEffect, useCallback } from "react";

interface FetchData<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  reload: () => void;
}

function useFetch<T>(url: string): FetchData<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error: any) {
      setError(error);
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  });

  const reload = () => {
    fetchData();
  };

  return { data, loading, error, reload };
}

export default useFetch;
