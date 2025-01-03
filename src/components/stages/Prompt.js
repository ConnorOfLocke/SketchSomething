import useVisualTimer from "../../hooks/useVisualTimer";

function Prompt({ prompt, time, onDone, children }) {
  const { remainingTime } = useVisualTimer(time, onDone);

  return (
    <>
      <progress value={remainingTime} max={time} />
      {children}
      <span>
        <h3>{prompt}</h3>
      </span>
    </>
  );
}

export default Prompt;
