import useVisualTimer from "../../hooks/useVisualTimer";
import StyledButton from "../forms/StyledButton";

function TimedStage({ time, children, onStepDone, pausable, skippable, timerText }) {
  const { timeCount, pauseState, togglePauseState } = useVisualTimer(time, onStepDone);

  function onPauseClick() {
    togglePauseState();
  }

  function onSkipClick() {
    onStepDone();
  }

  let timerComponent = null;
  if (timerText) {
    if (Array.isArray(timerText)) {
      const timerTextIndex = Math.floor((timeCount / time) * timerText.length);
      timerComponent = timerText[timerTextIndex];
    } else {
      timerComponent = timerText;
    }
  }

  return (
    <>
      <section>
        <progress value={time - timeCount} max={time} />
        <h1>{timerComponent}</h1>
        {children}
      </section>
      {pausable && (
        <StyledButton onClick={onPauseClick}>{pauseState ? "Unpause" : "Pause"} </StyledButton>
      )}
      {skippable && <StyledButton onClick={onSkipClick}>Skip</StyledButton>}
    </>
  );
}

export default TimedStage;
