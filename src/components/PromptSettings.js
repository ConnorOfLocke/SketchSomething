import classes from "./PromptSettings.module.css";
import CheckboxSet from "./CheckboxSet";

const SET_LENGTHS = ["15", "30", "45", "60", "75"];
const SUBJECT_TYPES = ["Animals", "Household Objects", "National Icons"];

function PromptSettings() {
  function handleStartDrawing(event) {
    event.preventDefault();
  }

  return (
    <>
      <form className={classes.settings} onSubmit={handleStartDrawing}>
        <CheckboxSet
          dataSet={SET_LENGTHS}
          setName={"SetLength"}
          legendText={"How long should a set last for?"}
          isRadio
        />
        <CheckboxSet
          dataSet={SUBJECT_TYPES}
          setName={"SubjectTypes"}
          legendText={"Drawing Subject Types"}
        />
        <span>
          <input type="checkbox" id="exercises" name="exercises" />
          <label htmlFor="exercises">Include Wrist Exercises</label>
        </span>

        {/*
        <span>
          <label htmlFor="setLength">Drawing Sets</label>
          <select id="setLength" name="setLength">
            {SET_LENGTHS.map((set) => (
              <option value={set}>{set}</option>
            ))}
          </select>
        </span>
        <span>
          <label>Set Length</label>
          <input type="number"></input>
        </span>
        <span>
          <label>How long </label>
          <select id="sessionLength" name="sessionLength">
            {SESSION_LENGTHS.map((session) => (
              <option value={session}>{session}</option>
            ))}
          </select>
        </span>
        */}
        <span className="button-span">
          <button>Advanced Settings </button>
          <button>Start Drawing!</button>
        </span>
      </form>
    </>
  );
}

export default PromptSettings;
