import classes from "./TimedStage.module.css";
import { useEffect } from "react";
import useVisualTimer from "../../hooks/useVisualTimer";
import { StyledProgress } from "../utils/progress";
import { StyledButton } from "../utils/button";
import { useSelector } from "react-redux";

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
  const { modalOpen } = useSelector((state) => state.uiState);
  const { timeCount, pauseState, setPauseState } = useVisualTimer(time, onStepDone);

  useEffect(
    () => {
      if (!pauseState && modalOpen) {
        setPauseState(true);
      } else if (pauseState && !modalOpen) {
        setPauseState(false);
      }
    },
    // eslint-disable-next-line
    [modalOpen]
  );

  function onPauseClick() {
    setPauseState((prevPauseState) => !prevPauseState);
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
