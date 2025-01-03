import useVisualTimer from "../../hooks/useVisualTimer";
import SessionStepLayout from "./SessionStepLayout";

function Exercises({ time, onStepDone }) {
  const { remainingTime } = useVisualTimer(time, onStepDone);

  return (
    <SessionStepLayout>
      <progress value={remainingTime} max={time} />
      <h2>Beeeeeeeeg Stretch</h2>
    </SessionStepLayout>
  );
}

export default Exercises;
