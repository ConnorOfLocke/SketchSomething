import useVisualTimer from "../../hooks/useVisualTimer";
import SessionStepLayout from "./SessionStepLayout";

function Exercises({ time, onStepDone }) {
  const { remainingTime } = useVisualTimer(time, onStepDone);

  return (
    <SessionStepLayout>
      <progress value={remainingTime} max={time} />
      <p>Beeeeeeeeg Stretch</p>
    </SessionStepLayout>
  );
}

export default Exercises;
