import { useCallback, useEffect, useState } from "react";
import Prompt from "./Prompt";

function PromptSet({ time, promptsPerSet, subject, onStepDone }) {
  const [promptIndex, setPromptIndex] = useState(null);
  const [promptCount, setPromptCount] = useState(0);

  console.log(`${promptIndex} - ${promptCount}`);

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

  const timePerPrompt = time / promptsPerSet;

  return (
    <Prompt prompt={subject.prompts[promptIndex]} time={timePerPrompt} onStepDone={onPromptDone}>
      <h3>
        {subject.name} ({promptCount + 1} of {promptsPerSet})
      </h3>
    </Prompt>
  );
}

export default PromptSet;
