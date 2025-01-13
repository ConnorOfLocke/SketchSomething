import classes from "./Countdown.module.css";
import TimedStage from "../TimedStage";
import { COUNTDOWN_TEXTS } from "../../../data/settings";

function Countdown({ onStepDone }) {
  let timerTexts =
    COUNTDOWN_TEXTS[Math.floor(Math.random() * COUNTDOWN_TEXTS.length)];

  timerTexts = timerTexts.map((text, textIndex) => (
    <span
      className={
        textIndex === timerTexts.length - 1
          ? classes.fancyText
          : classes.timerText
      }
    >
      <h1>{text}</h1>
    </span>
  ));

  //second-ish ;3
  const time = timerTexts.length * 1200;

  return (
    <TimedStage
      time={time}
      onStepDone={onStepDone}
      hideTimer
      timerText={timerTexts}
      pausable
    ></TimedStage>
  );
}

export default Countdown;
