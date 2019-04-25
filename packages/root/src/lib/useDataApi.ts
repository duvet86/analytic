import { useState, useEffect } from "react";
import { getWithJwtAsync } from "lib/http";

export function useDataApi<T>(initialUrl: string, initialData?: T) {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setError(undefined);
      setIsLoading(true);

      try {
        const result = await getWithJwtAsync<T>(url);

        setData(result);
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  const doFetch = (urlParam: string) => {
    setUrl(urlParam);
  };

  return { data, isLoading, error, doFetch };
}
