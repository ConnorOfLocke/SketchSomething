import classes from "./Prompt.module.css";
import TimedStage from "../TimedStage";
import { useState } from "react";

function Prompt({ time, onStepDone, prompt, children }) {
  const [hideState, setHideState] = useState(true);

  function onPauseCallback(pauseState) {
    setHideState(pauseState);
  }

  return (
    <>
      <TimedStage
        key={prompt}
        time={time}
        onStepDone={onStepDone}
        pausable
        onPauseCallback={onPauseCallback}
      >
        {children}
        <div className={`${classes.prompt} ${hideState ? classes.paused : ""}`}>
          <h1>{hideState ? "PAUSED" : prompt}</h1>
        </div>
      </TimedStage>
    </>
  );
}

export default Prompt;
