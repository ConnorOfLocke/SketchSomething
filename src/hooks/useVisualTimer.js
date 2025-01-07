import { useCallback, useEffect, useState } from "react";

const useVisualTimer = (time, onTimeout, timerInterval = 30) => {
  const [timeCount, setTimeCount] = useState(0);
  const [pauseState, setPauseState] = useState(false);

  const togglePauseState = useCallback(() => {
    setPauseState((prevState) => !prevState);
  }, [setPauseState]);

  useEffect(() => {
    if (timeCount >= time) onTimeout();
  }, [timeCount, time, onTimeout]);

  useEffect(() => {
    let timer = null;
    let originalStart = new Date().getTime();
    let lastFrameTime = originalStart;

    function timerInstance() {
      const now = new Date().getTime();
      const timePassed = now - lastFrameTime;
      lastFrameTime = now;

      if (!pauseState) {
        setTimeCount((curTime) => curTime + timePassed);
      }

      //set the next "frame"
      const diff = timerInterval - timePassed;
      timer = setTimeout(timerInstance, timerInterval + diff);
    }

    timer = setTimeout(timerInstance, timerInterval);

    return () => {
      clearInterval(timer);
    };
  }, [time, onTimeout, timerInterval, pauseState]);

  return { timeCount, pauseState, togglePauseState };
};

export default useVisualTimer;
