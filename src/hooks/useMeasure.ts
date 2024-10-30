import { useState, useRef, useEffect } from 'react';

const useMeasure = (): [
  React.MutableRefObject<null>,
  { width: number; height: number },
] => {
  const [rect, setRect] = useState({ width: 0, height: 0 });
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(([entry]) => {
      setRect(entry.contentRect);
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, rect];
};

export default useMeasure;
