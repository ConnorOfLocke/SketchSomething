import classes from "./PromptSettings.module.css";
import CheckboxSet from "./forms/CheckboxSet";
import { useFetcher } from "react-router";
import LabeledCheckbox from "./forms/LabeledCheckbox";

const SESSION_TIMES = ["15", "30", "45", "60", "75"];
const SUBJECT_TYPES = ["Animals", "Household Objects", "National Icons"];

const sessionTimeID = "sessionTime";
const subjectTypeID = "subjectType";
const encouragingCheckID = "encouraging";
const exercisesCheckID = "exercises";

function PromptSettings() {
  const fetcher = useFetcher();
  //const { data, state } = fetcher;

  return (
    <>
      <fetcher.Form method="post" className={classes.settings}>
        <CheckboxSet
          dataSet={SESSION_TIMES}
          setName={sessionTimeID}
          legendText={"How long so you want to draw for?"}
          isRadio
        />
        <CheckboxSet
          dataSet={SUBJECT_TYPES}
          setName={subjectTypeID}
          legendText={"Drawing Subject Types"}
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
      </fetcher.Form>
    </>
  );
}

export async function PromptSettingsAction({ request }) {
  /*const data = await request.formData();
  const parsedData = {
    sessionTime: parseInt(data.get(sessionTimeID) || SESSION_TIMES[0]),
    subjects: data.getAll(subjectTypeID) || [],
    encouraging: data.get(encouragingCheckID) === "on" || false,
    exercises: data.get(exercisesCheckID) === "on" || false,
  };*/

  return { message: "We're doin it!" };
}

export default PromptSettings;
