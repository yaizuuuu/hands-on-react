import React, { useEffect, useState } from 'react';
import { useMountedRef } from './hook';

type fetchData = object

function useFetch<T extends fetchData>(uri: string) {
  const [data, setData] = useState({} as T);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const mounted = useMountedRef();

  useEffect(() => {
    if (!uri) return;
    if (!mounted.current) return;

    setLoading(true);

    fetch(uri)
      .then(data => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri]);

  return { loading, data, error };
}

type renderData = {
  data: object
}

type FetchProps<T extends renderData> = {
  uri: string,
  renderSuccess: (obj: T) => JSX.Element
  loadingFallback?: JSX.Element
  renderError?: (error: object) => JSX.Element
}

export default function Fetch<T extends renderData>({
  uri,
  renderSuccess,
  loadingFallback = <p>loading...</p>,
  renderError = error => <pre>{JSON.stringify(error, null, 2)}</pre>,
}: FetchProps<T>): JSX.Element {
  const { loading, data, error } = useFetch(uri);

  if (error) return renderError(error);
  if (loading) return loadingFallback;
  if (data) return renderSuccess({ data } as T);

  return <p>No Content</p>;
}
