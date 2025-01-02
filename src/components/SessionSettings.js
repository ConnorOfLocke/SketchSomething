import classes from "./SessionSettings.module.css";
import CheckboxSet from "./forms/CheckboxSet";
import { useDispatch, useSelector } from "react-redux";
import LabeledCheckbox from "./forms/LabeledCheckbox";
import { sessionSettingsActions } from "../store/session-settings-slice";
import { useNavigate } from "react-router";

const SESSION_TIMES = ["15", "30", "45", "60", "75"];
const SUBJECT_TYPES = ["Animals", "Household Objects", "National Icons"];

const sessionTimeID = "sessionTime";
const subjectTypeID = "subjectType";
const encouragingCheckID = "encouraging";
const exercisesCheckID = "exercises";

function SessionSettings() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sessionSettings = useSelector((state) => state.sessionSettings);

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const parsedData = {
      sessionTime: parseInt(formData.get(sessionTimeID) || SESSION_TIMES[0]),
      subjects: formData.getAll(subjectTypeID) || [],
      encouraging: formData.get(encouragingCheckID) === "on" || false,
      exercises: formData.get(exercisesCheckID) === "on" || false,
    };

    await dispatch(sessionSettingsActions.setSettings(parsedData));
    navigate("/session");
  }

  return (
    <>
      <form onSubmit={onSubmit} className={classes.settings}>
        <CheckboxSet
          dataSet={SESSION_TIMES}
          setName={sessionTimeID}
          legendText={"How long so you want to draw for?"}
          defaultValues={`${sessionSettings.sessionTime}`}
          isRadio
        />
        <CheckboxSet
          dataSet={SUBJECT_TYPES}
          setName={subjectTypeID}
          legendText={"Drawing Subject Types"}
          defaultValues={sessionSettings.subjects}
        />
        <span>
          <LabeledCheckbox
            id={exercisesCheckID}
            defaultChecked={true}
            label="Include hand stretching exercises"
          />
        </span>
        <span>
          <LabeledCheckbox
            id={encouragingCheckID}
            defaultChecked={true}
            label="Include encouraging messages"
          />
        </span>
        <span className="button-span">
          <button type="button">Advanced Settings </button>
          <button type="submit">Start Drawing!</button>
        </span>
      </form>
    </>
  );
}

export default SessionSettings;
