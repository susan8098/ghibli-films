import { useState, useEffect } from 'react';

const useApiData = (initialUrl, urlEndpoint = 'films') => {

  const [url, setUrl] = useState(initialUrl);
  const [endpoint, setEndpoint] = useState(urlEndpoint);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {

    const fetchData = async () => {
      setIsLoading(true);
      const requestUrl = url + endpoint;
      const response = await fetch(requestUrl);
      const apiData = await response.json();

      setData(apiData);
      setUrl();
      setIsLoading(false);
    };

    if (url) {
      fetchData();
    }

  }, [url, endpoint]);

  return [data, isLoading, setEndpoint];
}

export default useApiData;