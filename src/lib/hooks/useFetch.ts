import { useCallback, useEffect, useState } from 'react';
import apiClient from '@/api';
import useInterval from './useInterval';

const useFetch = <T>(defaultValue: T, url: string): [T, boolean, boolean] => {
  const [payload, setPayload] = useState(defaultValue);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = useCallback(() => {
    apiClient
      .get(url)
      .then((res) => setPayload(res.data))
      .catch((_) => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [url]);

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, [getData]);

  useInterval(() => {
    getData();
  }, 5000);

  return [payload, isLoading, isError];
};

export default useFetch;
