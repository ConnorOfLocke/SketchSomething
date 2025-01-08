import TimedStage from "../TimedStage";
import { COUNTDOWN_TEXTS } from "../../../data/settings";

function Countdown({ onStepDone }) {
  const timerTexts = COUNTDOWN_TEXTS[Math.floor(Math.random() * COUNTDOWN_TEXTS.length)];

  const time = timerTexts.length * 1000;

  return (
    <TimedStage
      time={time}
      onStepDone={onStepDone}
      pausable
      hideTimer
      timerText={timerTexts}
    ></TimedStage>
  );
}

export default Countdown;
