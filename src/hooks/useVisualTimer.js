import { useEffect, useState } from "react";

const useVisualTimer = (time, onTimeout) => {
  const [remainingTime, setRemainingTime] = useState(time);

  //for functional components
  useEffect(() => {
    const timer = setTimeout(onTimeout, time);

    return () => {
      clearTimeout(timer);
    };
  }, [time, onTimeout]);

  //for visual components
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [time, onTimeout]);

  return { remainingTime };
};

export default useVisualTimer;
