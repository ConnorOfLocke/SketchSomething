import classes from "./SessionSettings.module.css";
import { CheckboxSet, StyledCheckbox } from "../utils/checkboxs";
import FoldableArea from "../utils/layouts/FoldableArea";
import { SUBJECTS } from "../../data/subjects";
import { SET_TIME, PROMPTS_PER_SET } from "../../data/settings";
import SmallBorderBox from "../utils/layouts/SmallBorderBox";
import { useState } from "react";

function SetSettings({
  set,
  setIndex,
  setTimeID,
  promptsPerSetID,
  subjectTypeID,
  graduallyMoreTimeID,
  ...props
}) {
  const [localState, setLocalState] = useState(set);

  function onTimeChange(value) {
    setLocalState((prevState) => {
      return { ...prevState, [setTimeID]: value };
    });
  }

  function onPromptsChange(value) {
    setLocalState((prevState) => {
      return { ...prevState, [promptsPerSetID]: value };
    });
  }

  function onSubjectChange(value) {
    setLocalState((prevState) => {
      return { ...prevState, [subjectTypeID]: value };
    });
  }

  function onGradualTimeChange(value) {
    setLocalState((prevState) => {
      return { ...prevState, [graduallyMoreTimeID]: value };
    });
  }

  return (
    <FoldableArea
      {...props}
      headerText={`Set ${setIndex + 1} - ${localState.prompts} ${
        localState.subject
      }`}
    >
      <CheckboxSet
        dataSet={SET_TIME}
        setName={`${setTimeID}${setIndex}`}
        legendText={"Total Time (Mins)"}
        defaultValues={localState.time}
        isRadio
        onClick={onTimeChange}
      />
      <CheckboxSet
        dataSet={PROMPTS_PER_SET}
        setName={`${promptsPerSetID}${setIndex}`}
        legendText={"Prompts"}
        defaultValues={localState.prompts}
        isRadio
        onClick={onPromptsChange}
      />
      <CheckboxSet
        dataSet={SUBJECTS.map((subject) => subject.name)}
        setName={`${subjectTypeID}${setIndex}`}
        legendText={"Subject"}
        defaultValues={localState.subject}
        isRadio
        displayAsRow={false}
        onClick={onSubjectChange}
      ></CheckboxSet>

      <SmallBorderBox
        titleText={"Time Adjustment"}
        className={classes.checkboxContainer}
      >
        <br />
        <StyledCheckbox
          id={`${graduallyMoreTimeID}${setIndex}`}
          defaultChecked={localState.graduallyMoreTime}
          value="Gradually Increase Time per Prompt"
          setName={graduallyMoreTimeID}
          onClick={onGradualTimeChange}
        />
        <br />
      </SmallBorderBox>
    </FoldableArea>
  );
}

export default SetSettings;
