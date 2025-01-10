import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { SUBJECTS } from "../data/settings";
import { BorderBox, ContentBox } from "../components/utils/layouts";
import { StyledButton } from "../components/utils/button";
import { Countdown, Stretches, PromptSet } from "../components/stages/timed-stages";
import { Complete } from "../components/stages";

const countdownId = "countdown";
const stretchesId = "stretches";
const promptSetId = "promptSet";
const completeId = "complete";

function getFullSubject(subjectName) {
  return SUBJECTS.find((subject) => subject.name === subjectName);
}

function createSession(sessionSettings) {
  const sessionSteps = [];

  //Intro and stretches
  if (sessionSettings.stretches) {
    sessionSteps.push({ type: stretchesId });
  }
  sessionSteps.push({ type: countdownId });

  //sets
  for (let i = 0; i < sessionSettings.setQuantity; i++) {
    let promptSubjectName = "";
    if (sessionSettings.subjects.length > 0) {
      promptSubjectName = sessionSettings.subjects[i % sessionSettings.subjects.length];
    } else {
      const randomIndex = Math.floor(Math.random() * SUBJECTS.length);
      promptSubjectName = SUBJECTS[randomIndex].name;
    }

    sessionSteps.push({
      type: promptSetId,
      setTime: sessionSettings.setTime,
      encouraging: sessionSettings.encouraging,
      promptsPerSet: sessionSettings.promptsPerSet,
      subjectName: promptSubjectName,
      promptSetIndex: i,
      setQuantity: sessionSettings.setQuantity,
    });
  }

  //Outro
  sessionSteps.push({
    type: completeId,
  });

  return sessionSteps;
}

function getSessionName(sessionStep) {
  switch (sessionStep.type) {
    case countdownId:
      return "Get ready!";
    case stretchesId:
      return "Stretch";
    case promptSetId:
      return `Set ${1 + sessionStep.promptSetIndex} of ${sessionStep.setQuantity}`;
    case completeId:
      return `Ya did it!!`;
    default:
      return "Unrecognised Step type";
  }
}

function getSessionStep(sessionStep, onStepDone) {
  switch (sessionStep.type) {
    case countdownId:
      return <Countdown onStepDone={onStepDone} />;
    case stretchesId:
      return <Stretches time={3000} onStepDone={onStepDone} />;
    case promptSetId:
      return (
        <PromptSet
          id={sessionStep}
          time={sessionStep.setTime * 1000 * 60}
          encouraging={sessionStep.encouraging}
          subject={getFullSubject(sessionStep.subjectName)}
          promptsPerSet={sessionStep.promptsPerSet}
          promptSetIndex={sessionStep.promptSetIndex}
          setQuantity={sessionStep.setQuantity}
          onStepDone={onStepDone}
        />
      );
    case completeId:
      return <Complete onStepDone={onStepDone} />;
    default:
      return <p>Unrecognised Step type</p>;
  }
}

function SessionPage() {
  const navigate = useNavigate();
  const sessionSettings = useSelector((state) => state.sessionSettings);
  const steps = createSession(sessionSettings);

  const [stepIndex, setStepIndex] = useState(0);

  function onStepDone() {
    if (stepIndex + 1 >= steps.length) {
      navigate("/");
    } else {
      setStepIndex((prevStepIndex) => prevStepIndex + 1);
    }
  }

  function onHomeButton() {
    navigate("/");
  }

  const currentStep = getSessionStep(steps[stepIndex], onStepDone);

  return (
    <>
      <ContentBox key={stepIndex} animate>
        <BorderBox borderType={"background"}>
          <header>
            <h1>{getSessionName(steps[stepIndex])}</h1>
          </header>
          {currentStep}
        </BorderBox>
      </ContentBox>
      <ContentBox>
        <StyledButton buttonType="secondary" onClick={onHomeButton}>
          Reset
        </StyledButton>
      </ContentBox>
    </>
  );
}

export default SessionPage;
