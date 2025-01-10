import classes from "./SessionSettings.module.css";

import { useDispatch, useSelector } from "react-redux";
import { sessionSettingsActions } from "../store/session-settings-slice";
import { useNavigate } from "react-router";
import { SET_QUANTITY, SET_TIME, PROMPTS_PER_SET, SUBJECTS } from "../data/settings";
import FoldableArea from "./forms/FoldableArea";
import { CheckboxSet, StyledCheckbox } from "./utils/checkboxs";
import StyledButton from "./utils/button/StyledButton";
import { CenteredColumn, CenteredRow } from "./utils/layouts";

const setTimeID = "setTime";
const setQuantityID = "setQuantity";
const promptsPerSetID = "promptsPerSet";
const subjectTypeID = "subjectType";
const stretchesCheckID = "stretches";

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
      stretches: formData.get(stretchesCheckID) === "on" || false,
    };

    await dispatch(sessionSettingsActions.setSettings(parsedData));
    navigate("/session");
  }

  return (
    <>
      <form onSubmit={onSubmit} className={classes.settings}>
        <FoldableArea headerText={"Session Settings"}>
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
            legendText={"Drawing Subject Types"}
            defaultValues={sessionSettings.subjects}
          />
          <div className={classes.checkboxContainer}>
            <StyledCheckbox
              id={stretchesCheckID}
              defaultChecked={true}
              value="Include hand stretches"
            />
          </div>
          <div className={classes.buttonContainer}>
            <StyledButton buttonType="primary" type="submit">
              Start Custom Session
            </StyledButton>
          </div>
        </FoldableArea>
      </form>
    </>
  );
}

export default SessionSettings;
