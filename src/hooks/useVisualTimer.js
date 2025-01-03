import { useEffect, useState } from "react";

const useVisualTimer = (time, onTimeout, timerInterval = 30) => {
  const [remainingTime, setRemainingTime] = useState(time);

  useEffect(() => {
    let timer = null;
    const start = new Date().getTime();
    let lastFrameTime = start;
    setRemainingTime(time);

    function timerInstance() {
      const now = new Date().getTime();
      const timePassed = now - lastFrameTime;
      lastFrameTime = now;

      setRemainingTime(time - (now - start));

      if (now - start > time) {
        onTimeout();
      } else {
        const diff = timerInterval - timePassed;
        timer = setTimeout(timerInstance, timerInterval + diff);
      }
    }

    timer = setTimeout(timerInstance, timerInterval);

    return () => {
      clearInterval(timer);
    };
  }, [time, onTimeout, timerInterval]);

  return { remainingTime };
};

export default useVisualTimer;
