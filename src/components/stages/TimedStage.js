import useVisualTimer from "../../hooks/useVisualTimer";
import StyledButton from "../forms/StyledButton";

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
          <StyledButton onClick={onPauseClick}>{pauseState ? "Unpause" : "Pause"} </StyledButton>
        </span>
      )}
    </>
  );
}

export default TimedStage;
