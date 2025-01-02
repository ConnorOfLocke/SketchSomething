import { useState } from "react";
import { useSelector } from "react-redux";
import Countdown from "../components/stages/Countdown";
import Exercises from "../components/stages/Exercises";

const countdownId = "countdown";
const exerciesId = "exercises";
const promptSessionId = "promptSession";

function createSession(sessionSettings) {
  const sessionSteps = [];

  sessionSteps.push({ type: countdownId });
  if (sessionSettings.exercises) {
    sessionSteps.push({ type: exerciesId });
  }

  for (let i = 0; i < sessionSettings.setTimes.length; i++) {
    sessionSteps.push({ type: promptSessionId });
  }

  return sessionSteps;
}

function getSessionStep(sessionStep, onStepDone) {
  console.log(sessionStep);
  console.log(sessionStep.type === exerciesId);
  switch (sessionStep.type) {
    case countdownId:
      return <Countdown time={3000} onStepDone={onStepDone} />;
    case exerciesId:
      return <Exercises time={3000} onStepDone={onStepDone} />;
    default:
      return <p>Unrecognised Step type</p>;
  }
}

function SessionPage() {
  const sessionSettings = useSelector((state) => state.sessionSettings);
  const steps = createSession(sessionSettings);

  const [stepIndex, setStepIndex] = useState(0);

  function onStepDone() {
    console.log("All done with this step yessir");
    setStepIndex((prevStepIndex) => prevStepIndex + 1);
  }

  const currentStep = getSessionStep(steps[stepIndex], onStepDone);

  return (
    <>
      <h1>Session Page</h1>
      {currentStep}
    </>
  );
}

export default SessionPage;
