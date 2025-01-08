import classes from "./Prompt.module.css";
import TimedStage from "../TimedStage";

function Prompt({ time, onStepDone, prompt, children }) {
  return (
    <>
      <TimedStage key={prompt} time={time} onStepDone={onStepDone} pausable>
        {children}
        <div className={classes.prompt}>
          <h1>{prompt}</h1>
        </div>
      </TimedStage>
    </>
  );
}

export default Prompt;
