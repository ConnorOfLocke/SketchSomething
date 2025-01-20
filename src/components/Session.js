import classes from "./Session.module.css";
import {
  Stretches,
  PromptSet,
  Countdown,
} from "../components/stages/timed-stages";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CompleteModal from "./modals/Complete";
import { SUBJECTS } from "../data/subjects";
import { ContentBox } from "./utils/layouts";

const countdownId = "countdown";
const stretchesId = "stretches";
const promptSetId = "promptSet";

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
      promptSubjectName =
        sessionSettings.subjects[i % sessionSettings.subjects.length];
    } else {
      const randomIndex = Math.floor(Math.random() * SUBJECTS.length);
      promptSubjectName = SUBJECTS[randomIndex].name;
    }

    sessionSteps.push({
      type: promptSetId,
      subjectName: promptSubjectName,
      promptSetIndex: i,
      setTime: sessionSettings.setTime,
      promptsPerSet: sessionSettings.promptsPerSet,
      setQuantity: sessionSettings.setQuantity,
      graduallyMoreTime: sessionSettings.graduallyMoreTime,
    });
  }

  return sessionSteps;
}

function getSessionStep(sessionStep, onStepDone) {
  switch (sessionStep.type) {
    case countdownId:
      return <Countdown key={sessionStep} onStepDone={onStepDone} />;
    case stretchesId:
      return <Stretches onStepDone={onStepDone} />;
    case promptSetId:
      return (
        <PromptSet
          key={sessionStep}
          headerText={`Set ${1 + sessionStep.promptSetIndex} of ${
            sessionStep.setQuantity
          }`}
          time={sessionStep.setTime * 1000 * 60} //from mins to milliseconds
          promptsPerSet={sessionStep.promptsPerSet}
          subject={getFullSubject(sessionStep.subjectName)}
          onStepDone={onStepDone}
          graduallyMoreTime={sessionStep.graduallyMoreTime}
        />
      );

    default:
      return <p>Unrecognised Step type</p>;
  }
}

function Session({ onSessionDone }) {
  const sessionSettings = useSelector((state) => state.sessionSettings);
  const [completeModalOpen, setCompleteModalOpen] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [steps, setSteps] = useState(null);

  useEffect(() => {
    const steps = createSession(sessionSettings);
    setSteps(steps);
  }, [sessionSettings]);

  function onStepDone() {
    if (stepIndex + 1 >= steps.length) {
      setCompleteModalOpen(true);
    } else {
      setStepIndex((prevStepIndex) => prevStepIndex + 1);
    }
  }

  function onCompleteModalConfirm() {
    setCompleteModalOpen(false);
    onSessionDone();
  }

  return (
    <>
      {!completeModalOpen && steps
        ? getSessionStep(steps[stepIndex], onStepDone)
        : null}
      {completeModalOpen && (
        <ContentBox className={classes.sessionBreak}>
          <br />
        </ContentBox>
      )}
      <CompleteModal
        steps={steps}
        open={completeModalOpen}
        onConfirm={onCompleteModalConfirm}
      />
    </>
  );
}

export default Session;
