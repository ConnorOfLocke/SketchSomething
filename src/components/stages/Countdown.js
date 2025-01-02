import useVisualTimer from "../../hooks/useVisualTimer";
import SessionStepLayout from "./SessionStepLayout";

function Countdown({ time, onStepDone }) {
  const { remainingTime } = useVisualTimer(time, onStepDone);

  return (
    <SessionStepLayout>
      <progress value={remainingTime} max={time} />
      <p>3,2,1 Less gooo</p>
    </SessionStepLayout>
  );
}

export default Countdown;
