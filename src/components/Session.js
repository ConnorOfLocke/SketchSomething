import { SUBJECTS } from "../data/settings";
import { Stretches, PromptSet, Countdown } from "../components/stages/timed-stages";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BorderBox, ContentBox } from "./utils/layouts";
import CompleteModal from "./modals/Complete";

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

  return sessionSteps;
}

function getSessionName(sessionStep) {
  switch (sessionStep.type) {
    case countdownId:
      return "Get ready!";
    case stretchesId:
      return "Stretch it out!";
    case promptSetId:
      return `Set ${1 + sessionStep.promptSetIndex} of ${sessionStep.setQuantity}`;
    default:
      return "Unrecognised Step type";
  }
}

function getSessionStep(sessionStep, onStepDone) {
  switch (sessionStep.type) {
    case countdownId:
      return <Countdown onStepDone={onStepDone} />;
    case stretchesId:
      return <Stretches onStepDone={onStepDone} />;
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
      <ContentBox key={stepIndex} animate>
        <BorderBox borderType={"background"}>
          <header>
            <h1>{steps && getSessionName(steps[stepIndex])}</h1>
          </header>
          {steps ? getSessionStep(steps[stepIndex], onStepDone) : null}
        </BorderBox>
      </ContentBox>
      <CompleteModal steps={steps} open={completeModalOpen} onConfirm={onCompleteModalConfirm} />
    </>
  );
}

export default Session;
