import { useCallback, useEffect, useState } from "react";
import Prompt from "./Prompt";

function PromptSet({
  time,
  promptsPerSet,
  subject,
  graduallyMoreTime,
  onStepDone,
}) {
  const [promptIndex, setPromptIndex] = useState(null);
  const [promptCount, setPromptCount] = useState(0);

  //get the full subject with all the prompts
  const refreshPromptIndex = useCallback(() => {
    const newIndex = Math.floor(Math.random() * subject.prompts.length);
    setPromptIndex(newIndex);
  }, [subject]);

  function onPromptDone() {
    if (promptCount + 1 >= promptsPerSet) {
      onStepDone();
    } else {
      setPromptCount((prev) => prev + 1);
      refreshPromptIndex();
    }
  }

  useEffect(() => {
    refreshPromptIndex();
  }, [subject, refreshPromptIndex]);

  let timePerPrompt = time / promptsPerSet;

  if (graduallyMoreTime) {
    // value between -1/2 time to 1/2 time
    const timeAdjust =
      timePerPrompt * 0.5 * ((promptCount / promptsPerSet) * 2.0 - 1.0);
    timePerPrompt += timeAdjust;
  }
  return (
    <Prompt
      prompt={subject.prompts[promptIndex]}
      time={timePerPrompt}
      onStepDone={onPromptDone}
    >
      <h3>
        {subject.name} ({promptCount + 1} of {promptsPerSet})
      </h3>
    </Prompt>
  );
}

export default PromptSet;
