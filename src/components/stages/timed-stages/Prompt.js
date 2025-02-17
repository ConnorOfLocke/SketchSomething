import classes from "./Prompt.module.css";
import TimedStage from "../TimedStage";
import { useState, useEffect } from "react";

const TIMEOUT_TIME = 2000;
const OUTRO_DELAY = 800;

const imageRotations = [
  classes.rotate_5deg,
  classes.rotate_10deg,
  classes.rotate_15deg,
  classes.rotate_neg5deg,
  classes.rotate_neg10deg,
  classes.rotate_neg15deg,
];

function getRandomRotationIndex() {
  return Math.floor(Math.random() * imageRotations.length);
}

function Prompt({
  time,
  onStepDone,
  initialDelay,
  subject,
  promptIndex,
  headerText,
  children,
  animateIn,
  animateOut,
}) {
  const [hideState, setHideState] = useState(true);
  const [showTimesUp, setShowTimesUp] = useState(false);
  const [rotationIndex, setRotationIndex] = useState(getRandomRotationIndex());

  const prompt = subject.prompts[promptIndex];
  const isImagePrompt = subject.isImagePrompt;
  const isRotatable = subject.isRotatable;

  useEffect(() => {
    setRotationIndex(getRandomRotationIndex());
  }, [subject, promptIndex]);

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
        className={`${classes.prompt} ${classes.timesUp} ${
          hideState ? classes.paused : ""
        } ${isImagePrompt ? classes.imagePromptTimesUp : ""}`}
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
      <div
        className={`${classes.prompt} ${
          isImagePrompt ? classes.imagePrompt : ""
        } ${hideState ? classes.paused : ""}`}
      >
        {isImagePrompt ? (
          <div>
            <img
              src={prompt}
              alt={prompt}
              className={`${hideState ? classes.paused : ""} ${
                isRotatable ? imageRotations[rotationIndex] : ""
              }`}
            />
          </div>
        ) : (
          <h1>{hideState ? "PAUSED" : prompt}</h1>
        )}
      </div>
    </TimedStage>
  );
}

export default Prompt;
