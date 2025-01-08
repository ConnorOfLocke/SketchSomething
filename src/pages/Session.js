import { useState } from "react";
import { useSelector } from "react-redux";
import Countdown from "../components/stages/timed-stages/Countdown";
import Exercises from "../components/stages/timed-stages/Exercises";
import PromptSet from "../components/stages/timed-stages/PromptSet";
import { useNavigate } from "react-router";
import Complete from "../components/stages/Complete";
import { SUBJECTS } from "../data/settings";
import BorderBox from "../components/BorderBox";
import ContentBox from "../components/ContentBox";
import StyledButton from "../components/forms/StyledButton";

const countdownId = "countdown";
const exerciesId = "exercises";
const promptSetId = "promptSet";
const completeId = "complete";

function getFullSubject(subjectName) {
  return SUBJECTS.find((subject) => subject.name === subjectName);
}

function createSession(sessionSettings) {
  const sessionSteps = [];

  //Intro and exercises
  sessionSteps.push({ type: countdownId });
  if (sessionSettings.exercises) {
    sessionSteps.push({ type: exerciesId });
  }

  //sets
  for (let i = 0; i < sessionSettings.setQuantity; i++) {
    const promptSubjectName = sessionSettings.subjects[i % sessionSettings.subjects.length];

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
    case exerciesId:
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
      return <Countdown time={3000} onStepDone={onStepDone} />;
    case exerciesId:
      return <Exercises time={3000} onStepDone={onStepDone} />;
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
      <ContentBox animate>
        <BorderBox borderType={"secondary"}>
          <header>
            <h1>{getSessionName(steps[stepIndex])}</h1>
          </header>

          {currentStep}
        </BorderBox>
      </ContentBox>
      <ContentBox>
        <StyledButton buttonType="secondary" onClick={onHomeButton}>
          Home
        </StyledButton>
      </ContentBox>
    </>
  );
}

export default SessionPage;
