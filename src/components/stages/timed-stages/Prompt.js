import classes from "./Prompt.module.css";
import TimedStage from "../TimedStage";
import { useState } from "react";

const TIMEOUT_TIME = 2000;
const OUTRO_DELAY = 800;

function Prompt({
  time,
  onStepDone,
  initialDelay,
  prompt,
  headerText,
  children,
  animateIn,
  animateOut,
}) {
  const [hideState, setHideState] = useState(true);
  const [showTimesUp, setShowTimesUp] = useState(false);

  function onPauseCallback(pauseState) {
    setHideState(pauseState);
  }

  function onPromptDone() {
    setShowTimesUp(true);
  }

  function onTimesUpDone() {
    setShowTimesUp(false);
    onStepDone();
  }

  return showTimesUp ? (
    /*Times up */
    <TimedStage
      key={prompt}
      time={TIMEOUT_TIME}
      initialDelay={initialDelay}
      outroDelay={animateOut ? OUTRO_DELAY : 0}
      onTimeDone={onTimesUpDone}
      pausable
      hideTimer
      onPauseCallback={onPauseCallback}
      headerText={headerText}
      animateIn={false}
      animateOut={animateOut}
    >
      {children}
      <div
        className={`${classes.prompt} ${hideState ? classes.paused : ""} ${
          showTimesUp ? classes.timesUp : ""
        }`}
      >
        <h1 className={!hideState ? classes.timesUp : ""}>
          {hideState ? "PAUSED" : "Times Up!"}
        </h1>
      </div>
    </TimedStage>
  ) : (
    /*Normal prompt */
    <TimedStage
      key={prompt}
      time={time}
      initialDelay={initialDelay}
      onTimeDone={onPromptDone}
      pausable
      onPauseCallback={onPauseCallback}
      headerText={headerText}
      animateIn={animateIn}
    >
      {children}
      <div className={`${classes.prompt} ${hideState ? classes.paused : ""}`}>
        <h1>{hideState ? "PAUSED" : prompt}</h1>
      </div>
    </TimedStage>
  );
}

export default Prompt;
