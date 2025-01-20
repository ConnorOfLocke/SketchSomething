import classes from "./TimedStage.module.css";
import { useEffect } from "react";
import useVisualTimer from "../../hooks/useVisualTimer";
import { StyledProgress } from "../utils/progress";
import { StyledButton } from "../utils/button";
import { useSelector } from "react-redux";
import { ContentBox, BorderBox } from "../utils/layouts";

function TimedStage({
  time,
  initialDelay = 0,
  outroDelay = 0,
  children,
  onTimeDone,
  pausable,
  skippable,
  hideTimer,
  timerText,
  headerText,
  animateIn = true,
  animateOut = true,
  onPauseCallback = null,
}) {
  const { modalOpen } = useSelector((state) => state.uiState);
  const { timeCount, pauseState, setPauseState } = useVisualTimer(
    time,
    initialDelay,
    outroDelay,
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
      const timerTextIndex = Math.min(
        timerText.length - 1,
        Math.floor((timeCount / time) * timerText.length)
      );
      timerTextComponent = timerText[timerTextIndex];
    } else {
      timerTextComponent = timerText;
    }
  }

  return (
    <ContentBox
      animateIn={animateIn && timeCount < time}
      animateOut={animateOut && timeCount >= time}
    >
      <BorderBox borderType={"background"}>
        <header>
          <h1>{headerText}</h1>
        </header>
        <section className={`${classes.timedStage}`}>
          {!hideTimer ? (
            <StyledProgress
              value={timeCount}
              max={time}
              isPaused={pauseState}
            />
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
      </BorderBox>
    </ContentBox>
  );
}

export default TimedStage;
