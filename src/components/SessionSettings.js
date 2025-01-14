import classes from "./SessionSettings.module.css";

import { useDispatch, useSelector } from "react-redux";
import { sessionSettingsActions } from "../store/session-settings-slice";
import { useNavigate } from "react-router";
import { SET_QUANTITY, SET_TIME, PROMPTS_PER_SET } from "../data/settings";
/*WARM_UP_SESSION,
  FULL_SESSION,*/
import { SUBJECTS } from "../data/subjects";
import FoldableArea from "./utils/layouts/FoldableArea";
import { CheckboxSet, StyledCheckbox } from "./utils/checkboxs";
import StyledButton from "./utils/button/StyledButton";
import { CenteredColumn } from "./utils/layouts";

const setTimeID = "setTime";
const setQuantityID = "setQuantity";
const promptsPerSetID = "promptsPerSet";
const subjectTypeID = "subjectType";
const stretchesCheckID = "stretches";

function SessionSettings() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sessionSettings = useSelector((state) => state.sessionSettings);

  /*
  async function onWarmupClicked() {
    await dispatch(sessionSettingsActions.setSettings(WARM_UP_SESSION));
    navigate("/session");
  }

  async function onFullSessionClicked() {
    await dispatch(sessionSettingsActions.setSettings(FULL_SESSION));
    navigate("/session");
  }*/

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const parsedData = {
      setTime: parseInt(formData.get(setTimeID) || SET_TIME[0]),
      setQuantity: parseInt(formData.get(setQuantityID) || SET_QUANTITY[0]),
      promptsPerSet: parseInt(
        formData.get(promptsPerSetID) || PROMPTS_PER_SET[0]
      ),
      subjects: formData.getAll(subjectTypeID) || [],
      stretches: Boolean(formData.get(stretchesCheckID)) || false,
    };

    await dispatch(sessionSettingsActions.setSettings(parsedData));
    navigate("/session");
  }

  return (
    <>
      <form onSubmit={onSubmit} className={classes.settings}>
        <FoldableArea
          className={classes.settingsArea}
          headerText={"Session Settings"}
        >
          <CheckboxSet
            dataSet={SET_QUANTITY}
            setName={setQuantityID}
            legendText={"Sets"}
            defaultValues={sessionSettings.setQuantity}
            isRadio
          />
          <CheckboxSet
            dataSet={SET_TIME}
            setName={setTimeID}
            legendText={"Set Time (Mins)"}
            defaultValues={sessionSettings.setTime}
            isRadio
          />
          <CheckboxSet
            dataSet={PROMPTS_PER_SET}
            setName={promptsPerSetID}
            legendText={"Prompts Per Set"}
            defaultValues={sessionSettings.promptsPerSet}
            isRadio
          />
          <CheckboxSet
            dataSet={SUBJECTS.map((subject) => subject.name)}
            setName={subjectTypeID}
            legendText={"Prompts"}
            defaultValues={sessionSettings.subjects}
          >
            <p>If no subjects are selected, they will be selected at random</p>
          </CheckboxSet>
          <div className={classes.checkboxContainer}>
            <StyledCheckbox
              id={stretchesCheckID}
              defaultChecked={true}
              value="Include hand stretches"
              setName={stretchesCheckID}
            />
          </div>
        </FoldableArea>
        <div className={classes.buttonContainer}>
          <CenteredColumn>
            <StyledButton buttonType="primary" type="submit">
              Start
            </StyledButton>
          </CenteredColumn>
        </div>
      </form>
    </>
  );
}

export default SessionSettings;
