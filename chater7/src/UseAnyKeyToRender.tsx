import { useEffect, useState } from 'react';

export const UseAnyKeyToRender = () => {
  const [, forceRender] = useState('');

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      console.log(e.key);
      forceRender(e.key);
    });

    return () => {
      window.removeEventListener('keydown', () => {
        console.log('goodbye')
        forceRender('')
      });
    };
  }, []);
};
