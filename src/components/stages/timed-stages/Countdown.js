import TimedStage from "../TimedStage";

function Countdown({ time, onStepDone }) {
  return (
    <TimedStage time={time} onStepDone={onStepDone} pausable>
      <h2>3,2,1 Less gooo</h2>
    </TimedStage>
  );
}

export default Countdown;
