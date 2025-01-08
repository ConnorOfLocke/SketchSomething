import TimedStage from "../TimedStage";

function Exercises({ time, onStepDone }) {
  return (
    <TimedStage time={time} onStepDone={onStepDone} pausable skippable>
      <h2>Beeeeeeeeg Stretch</h2>
    </TimedStage>
  );
}

export default Exercises;
