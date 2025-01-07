import TimedStage from "../TimedStage";

function Prompt({ time, onStepDone, prompt, children }) {
  return (
    <>
      <TimedStage key={prompt} time={time} onStepDone={onStepDone}>
        {children}
        <span>
          <h3>{prompt}</h3>
        </span>
      </TimedStage>
    </>
  );
}

export default Prompt;
