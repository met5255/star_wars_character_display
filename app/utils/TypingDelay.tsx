import { useEffect, useState } from "react";

function useTypingDelay<T>(value: T, delay: number): T {
  const [typeValue, setTypeValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
        setTypeValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return typeValue;
}

export default useTypingDelay;
