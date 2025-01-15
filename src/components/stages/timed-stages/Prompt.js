import classes from "./Prompt.module.css";
import TimedStage from "../TimedStage";
import { useState } from "react";

function Prompt({ time, onStepDone, prompt, children }) {
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

  return (
    <TimedStage
      key={prompt}
      time={showTimesUp ? 2000 : time}
      onTimeDone={showTimesUp ? onTimesUpDone : onPromptDone}
      pausable
      hideTimer={showTimesUp}
      onPauseCallback={onPauseCallback}
    >
      {children}
      <div
        className={`${classes.prompt} ${hideState ? classes.paused : ""} ${
          showTimesUp ? classes.timesUp : ""
        }`}
      >
        <h1 className={!hideState && showTimesUp ? classes.timesUp : ""}>
          {hideState ? "PAUSED" : showTimesUp ? "Times Up!" : prompt}
        </h1>
      </div>
    </TimedStage>
  );
}

export default Prompt;
