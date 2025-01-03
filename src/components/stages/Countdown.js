import useVisualTimer from "../../hooks/useVisualTimer";
import SessionStepLayout from "./SessionStepLayout";

function Countdown({ time, onStepDone }) {
  const { remainingTime } = useVisualTimer(time, onStepDone);

  return (
    <SessionStepLayout>
      <progress value={remainingTime} max={time} />
      <h2>3,2,1 Less gooo</h2>
    </SessionStepLayout>
  );
}

export default Countdown;
