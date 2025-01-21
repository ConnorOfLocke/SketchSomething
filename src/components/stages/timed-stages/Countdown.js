import classes from "./Countdown.module.css";
import TimedStage from "../TimedStage";
import { COUNTDOWN_TEXTS } from "../../../data/countdown-text";
import { CenteredColumn } from "../../utils/layouts";
import { useEffect, useState } from "react";

function GetCountdownTextIndex() {
  return Math.floor(Math.random() * COUNTDOWN_TEXTS.length);
}

function Countdown({ onStepDone }) {
  const [timerTextIndex, setTimerText] = useState(GetCountdownTextIndex());

  useEffect(() => {
    setTimerText(GetCountdownTextIndex());
  }, [onStepDone]);

  let timerTexts = COUNTDOWN_TEXTS[timerTextIndex];

  timerTexts = timerTexts.map((text, textIndex) => (
    <span
      className={
        textIndex === timerTexts.length - 1
          ? classes.fancyText
          : classes.timerText
      }
    >
      <CenteredColumn>
        <h1>{text}</h1>
      </CenteredColumn>
    </span>
  ));

  //second-ish ;3
  const time = timerTexts.length * 1200;

  return (
    <TimedStage
      time={time}
      delay={800}
      outroDelay={800}
      onTimeDone={onStepDone}
      hideTimer
      timerText={timerTexts}
      classes={classes.countdown}
      headerText={"Get Ready"}
    />
  );
}

export default Countdown;
