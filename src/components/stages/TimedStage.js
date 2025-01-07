import useVisualTimer from "../../hooks/useVisualTimer";

function TimedStage({ time, children, onStepDone, pausable }) {
  const { timeCount, pauseState, togglePauseState } = useVisualTimer(time, onStepDone);

  function onPauseClick() {
    togglePauseState();
  }

  return (
    <>
      <section>
        <progress value={time - timeCount} max={time} />
        {children}
      </section>
      {pausable && (
        <span>
          <button onClick={onPauseClick}>{pauseState ? "Unpause" : "Pause"} </button>
        </span>
      )}
    </>
  );
}

export default TimedStage;
