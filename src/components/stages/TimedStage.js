import classes from "./TimedStage.module.css";
import { useEffect } from "react";
import useVisualTimer from "../../hooks/useVisualTimer";
import { StyledProgress } from "../utils/progress";
import { StyledButton } from "../utils/button";

function TimedStage({
  time,
  children,
  onStepDone,
  pausable,
  skippable,
  hideTimer,
  timerText,
  onPauseCallback = null,
}) {
  const { timeCount, pauseState, togglePauseState } = useVisualTimer(time, onStepDone);

  function onPauseClick() {
    togglePauseState();
  }

  function onSkipClick() {
    onStepDone();
  }

  useEffect(() => {
    if (onPauseCallback) {
      onPauseCallback(pauseState);
    }
  }, [pauseState, onPauseCallback]);

  let timerComponent = null;
  if (timerText) {
    if (Array.isArray(timerText)) {
      const timerTextIndex = Math.floor((timeCount / time) * timerText.length);
      timerComponent = timerText[timerTextIndex];
    } else {
      timerComponent = timerText;
    }
  }

  return (
    <>
      <section>
        {!hideTimer && <StyledProgress value={time - timeCount} max={time} isPaused={pauseState} />}
        <h1 className={classes.timerText}>{timerComponent}</h1>
        {children}
      </section>
      {pausable && (
        <StyledButton onClick={onPauseClick}>{pauseState ? "Unpause" : "Pause"} </StyledButton>
      )}
      {skippable && <StyledButton onClick={onSkipClick}>Skip</StyledButton>}
    </>
  );
}

export default TimedStage;
