import { useEffect, useState } from "react";

const useVisualTimer = (
  time,
  initialDelay = 0,
  outroDelay = 0,
  onTimeout,
  timerInterval = 30
) => {
  const [timeCount, setTimeCount] = useState(0);
  const [pauseState, setPauseState] = useState(false);

  useEffect(() => {
    if (timeCount >= time + outroDelay) {
      setTimeCount(0);
      onTimeout();
    }
  }, [timeCount, time, outroDelay, onTimeout]);

  useEffect(() => {
    let timer = null;

    function startTimer() {
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
    }

    if (initialDelay) {
      timer = setTimeout(startTimer, initialDelay);
    } else {
      startTimer();
    }

    return () => {
      clearInterval(timer);
    };
  }, [time, onTimeout, timerInterval, initialDelay, pauseState]);

  return { timeCount, pauseState, setPauseState };
};

export default useVisualTimer;
