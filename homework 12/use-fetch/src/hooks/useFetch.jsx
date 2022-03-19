import { useEffect, useState } from "react";

const useFetch = (url, init = {}) => {

  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch(url, init)
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  const handleFetch = (url, init = {}) => {
    setLoading(true)
    fetch(url, init)
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  };

  return {data, error, loading, handleFetch};
};

export default useFetch;
