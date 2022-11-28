import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export function useIterator<T>(items: T[] = [], initialIndex: number = 0) {
  const [i, setIndex] = useState(initialIndex);

  const prev = useCallback(() => {
    if (i == 0) return setIndex(items.length - 1);

    setIndex(i - 1);
  }, [i]);

  const next = useCallback(() => {
    if (i == items.length - 1) return setIndex(0);

    return setIndex(i + 1);
  }, [i]);

  const item = useMemo(() => items[i], [i]);

  return {
    item: item || items[0], prev, next,
  };
}

export function useMountedRef() {
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;

    return () => { mounted.current = false; };
  });

  return mounted;
}
