import classes from "./SessionSettings.module.css";

import { useDispatch, useSelector } from "react-redux";
import { sessionSettingsActions } from "../../store/session-settings-slice";
import { SET_QUANTITY, SET_TIME, PROMPTS_PER_SET } from "../../data/settings";
/*WARM_UP_SESSION,
  FULL_SESSION,*/
import { CheckboxSet, StyledCheckbox } from "../utils/checkboxs";
import StyledButton from "../utils/button/StyledButton";
import { CenteredColumn } from "../utils/layouts";
import SmallBorderBox from "../utils/layouts/SmallBorderBox";
import SetSettings from "./SetSettings";
import { SUBJECTS } from "../../data/subjects";

const setQuantityID = "setQuantity";

const setTimeID = "time";
const promptsPerSetID = "prompts";
const subjectTypeID = "subject";
const stretchesCheckID = "stretches";
const graduallyMoreTimeID = "graduallyMoreTime";

function SessionSettings({ onConfirmSettings }) {
  const dispatch = useDispatch();
  const sessionSettings = useSelector((state) => state.sessionSettings);

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const setQuantity = parseInt(
      formData.get(setQuantityID) || SET_QUANTITY[0]
    );

    const newSets = [];
    for (let setIndex = 0; setIndex < setQuantity; setIndex++) {
      const newSet = {
        prompts: parseInt(
          formData.get(`${promptsPerSetID}${setIndex}`) || PROMPTS_PER_SET[0]
        ),
        time: parseInt(formData.get(`${setTimeID}${setIndex}`) || SET_TIME[0]),
        subject: formData.get(`${subjectTypeID}${setIndex}`) || SUBJECTS[0],
        graduallyMoreTime:
          Boolean(formData.get(`${graduallyMoreTimeID}${setIndex}`)) || false,
      };
      newSets.push(newSet);
    }

    const parsedData = {
      sets: newSets,
      stretches: Boolean(formData.get(stretchesCheckID)) || false,
    };

    await dispatch(sessionSettingsActions.setSettings(parsedData));

    onConfirmSettings();
  }

  async function onSetQuantityChange(value) {
    await dispatch(sessionSettingsActions.setNewSetNumber(value));
  }

  return (
    <form onSubmit={onSubmit} className={classes.settings}>
      <SmallBorderBox
        titleText={"Stretches"}
        className={classes.stretchContainer}
      >
        <StyledCheckbox
          id={stretchesCheckID}
          defaultChecked={sessionSettings.stretches}
          value="Start with hand stretches"
          setName={stretchesCheckID}
        />
        <p>
          Start your drawing session with some guided hand and arm stretches
        </p>
      </SmallBorderBox>
      <CheckboxSet
        dataSet={SET_QUANTITY}
        setName={setQuantityID}
        legendText={"Sets"}
        defaultValues={sessionSettings.sets.length}
        isRadio
        onClick={onSetQuantityChange}
        className={classes.settingsContainer}
      />

      {sessionSettings.sets.map((set, setIndex) => (
        <SetSettings
          key={setIndex}
          set={set}
          setIndex={setIndex}
          setTimeID={setTimeID}
          promptsPerSetID={promptsPerSetID}
          subjectTypeID={subjectTypeID}
          graduallyMoreTimeID={graduallyMoreTimeID}
        />
      ))}

      <div className={classes.buttonContainer}>
        <CenteredColumn>
          <StyledButton buttonType="primary" type="submit">
            Start
          </StyledButton>
        </CenteredColumn>
      </div>
    </form>
  );
}

export default SessionSettings;
