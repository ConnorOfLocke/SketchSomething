import classes from "./Stretches.module.css";
import TimedStage from "../TimedStage";
import { WRIST_EXERCISES } from "../../../data/exercises";
import { useState } from "react";
import { StyledButton } from "../../utils/button";

function Stretches({ onStepDone }) {
  const [stretchIndex, setStretchIndex] = useState(0);

  const exercises = WRIST_EXERCISES;

  function onStretchStepDone() {
    if (stretchIndex < exercises.length - 1) {
      setStretchIndex((index) => index + 1);
    } else {
      onStepDone();
    }
  }

  function onBackClick() {
    if (stretchIndex > 0) {
      setStretchIndex((index) => index - 1);
    }
  }

  function onNextClick() {
    if (stretchIndex < exercises.length - 1) {
      setStretchIndex((index) => index + 1);
    }
  }

  const currentStep = exercises[stretchIndex];

  return (
    <TimedStage
      key={`stretch_${stretchIndex}`}
      time={currentStep.time * 1000}
      onTimeDone={onStretchStepDone}
    >
      <div className={classes.exerciseContainer}>
        <h3 className={classes.exerciseText}>{currentStep.text}</h3>
      </div>
      <div className={classes.navigationButtons}>
        <StyledButton
          buttonType="secondary"
          onClick={onBackClick}
          disabled={stretchIndex === 0}
        >
          Back
        </StyledButton>
        <span />
        <StyledButton
          buttonType="secondary"
          onClick={onNextClick}
          disabled={stretchIndex === exercises.length - 1}
        >
          Next
        </StyledButton>
      </div>
    </TimedStage>
  );
}

export default Stretches;
