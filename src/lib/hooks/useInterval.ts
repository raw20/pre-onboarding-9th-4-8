import { useEffect, useRef } from 'react';

const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef<(() => void) | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const tick = () => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    };

    const id = setInterval(tick, 5000);
    return () => clearInterval(id);
  }, []);
};
export default useInterval;
