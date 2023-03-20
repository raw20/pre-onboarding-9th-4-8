import { useCallback, useEffect, useState } from 'react';
import apiClient from '@/api';
import useInterval from './useInterval';

const useFetch = <T>(
  defaultValue: T,
  url: string,
  preProcessData: ((data: T) => T) | null = null,
): [T, boolean, boolean] => {
  const [payload, setPayload] = useState(defaultValue);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = useCallback(() => {
    apiClient
      .get(url)
      .then((res) =>
        preProcessData === null ? res.data : preProcessData(res.data),
      )
      .then((res) => setPayload(res))
      .catch((_) => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [preProcessData, url]);

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
