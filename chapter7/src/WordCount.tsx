import { UseAnyKeyToRender } from './UseAnyKeyToRender';
import { useEffect, useMemo } from 'react';

export default function WordCount({ children = '' }) {
  UseAnyKeyToRender();

  // const words = children.split(' ');

  const words = useMemo(() => {
    const words = children.split(' ');

    return words;
  }, [children]);

  useEffect(() => {
    console.log('fresh render');
  }, [words]);

  return <>
    <p>{children}</p>
    <p>
      <strong>{words.length} - words</strong>
    </p>
  </>;
}