import classes from "./TimedStage.module.css";
import { useEffect } from "react";
import useVisualTimer from "../../hooks/useVisualTimer";
import { StyledProgress } from "../utils/progress";
import { StyledButton } from "../utils/button";
import { useSelector } from "react-redux";

function TimedStage({
  time,
  children,
  onTimeDone,
  pausable,
  skippable,
  hideTimer,
  timerText,
  onPauseCallback = null,
}) {
  const { modalOpen } = useSelector((state) => state.uiState);
  const { timeCount, pauseState, setPauseState } = useVisualTimer(
    time,
    onTimeDone
  );

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
    onTimeDone();
  }

  useEffect(() => {
    if (onPauseCallback) {
      onPauseCallback(pauseState);
    }
  }, [pauseState, onPauseCallback]);

  let timerTextComponent = null;
  if (timerText) {
    if (Array.isArray(timerText)) {
      const timerTextIndex = Math.floor((timeCount / time) * timerText.length);
      timerTextComponent = timerText[timerTextIndex];
    } else {
      timerTextComponent = timerText;
    }
  }

  return (
    <>
      <section className={classes.timedStage}>
        {!hideTimer ? (
          <StyledProgress value={timeCount} max={time} isPaused={pauseState} />
        ) : (
          <br />
        )}
        {timerTextComponent}
        {children}
      </section>
      {pausable && (
        <StyledButton onClick={onPauseClick}>
          {pauseState ? "Unpause" : "Pause"}
        </StyledButton>
      )}
      {skippable && <StyledButton onClick={onSkipClick}>Skip</StyledButton>}
    </>
  );
}

export default TimedStage;
