import { useState, useEffect } from 'react';

export const useAnimation = (dependency: any) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);

    const timer = setTimeout(() => {
      setAnimate(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [dependency]);

  return animate;
};
