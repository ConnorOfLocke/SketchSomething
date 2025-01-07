import classes from "./SessionSettings.module.css";
import CheckboxSet from "./forms/CheckboxSet";
import { useDispatch, useSelector } from "react-redux";
import LabeledCheckbox from "./forms/LabeledCheckbox";
import { sessionSettingsActions } from "../store/session-settings-slice";
import { useNavigate } from "react-router";
import { SET_QUANTITY, SET_TIME, PROMPTS_PER_SET, SUBJECTS } from "../data/settings";

const setTimeID = "setTime";
const setQuantityID = "setQuantity";
const promptsPerSetID = "promptsPerSet";
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
      setTime: parseInt(formData.get(setTimeID) || SET_TIME[0]),
      setQuantity: parseInt(formData.get(setQuantityID) || SET_QUANTITY[0]),
      promptsPerSet: parseInt(formData.get(promptsPerSetID) || PROMPTS_PER_SET[0]),
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
          dataSet={SET_QUANTITY}
          setName={setQuantityID}
          legendText={"How many sets?"}
          defaultValues={sessionSettings.setQuantity}
          isRadio
        />
        <CheckboxSet
          dataSet={SET_TIME}
          setName={setTimeID}
          legendText={"How long do you want each set to go for?"}
          defaultValues={sessionSettings.setTime}
          suffix={" mins"}
          isRadio
        />
        <CheckboxSet
          dataSet={PROMPTS_PER_SET}
          setName={promptsPerSetID}
          legendText={"How many prompts per set?"}
          defaultValues={sessionSettings.promptsPerSet}
          isRadio
        />
        <CheckboxSet
          dataSet={SUBJECTS.map((subject) => subject.name)}
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
